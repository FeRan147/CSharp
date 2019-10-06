using System;
using System.Collections.Generic;
using System.Text;
using DomainInterfaces.Messages.Devices;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using NServiceBus;
using NServiceBus.ObjectBuilder.MSDependencyInjection;

namespace DependencyInjection.Configs
{
    public class MicroServicesConfig
    {
        private IServiceCollection _services;
        private IConfiguration _configuration;

        public MicroServicesConfig(IServiceCollection services, IConfiguration configuration)
        {
            _services = services;
            _configuration = configuration;
        }

        public void Configure()
        {
            IEndpointInstance endpointInstance = null;
            _services.AddSingleton<IMessageSession>(_ => endpointInstance);

            var endpointConfiguration = new EndpointConfiguration(_configuration.GetSection("MicroServices").GetSection("Endpoint").Value);
            var transport = endpointConfiguration.UseTransport<RabbitMQTransport>();
            transport.ConnectionString(_configuration.GetSection("Transport")["RabbitMQConnectionString"]);
            transport.UsePublisherConfirms(true);
            transport.UseDirectRoutingTopology();

            endpointConfiguration.EnableInstallers();
            endpointConfiguration.EnableCallbacks();

            var routerConfig = transport.Routing();

            routerConfig.RouteToEndpoint(
                assembly: typeof(AddDevice).Assembly,
                destination: _configuration.GetSection("MicroServices").GetSection("Endpoint").Value);
            routerConfig.RouteToEndpoint(
                assembly: typeof(UpdateDevice).Assembly,
                destination: _configuration.GetSection("MicroServices").GetSection("Endpoint").Value);
            routerConfig.RouteToEndpoint(
                assembly: typeof(RemoveDevice).Assembly,
                destination: _configuration.GetSection("MicroServices").GetSection("Endpoint").Value);

            var discriminator = _configuration.GetSection("MicroServices").GetSection("Discriminator").Value;
            endpointConfiguration.MakeInstanceUniquelyAddressable(discriminator);

            UpdateableServiceProvider container = null;
            endpointConfiguration.UseContainer<ServicesBuilder>(
                customizations: customizations =>
                {
                    customizations.ExistingServices(_services);
                    customizations.ServiceProviderFactory(service =>
                    {
                        container = new UpdateableServiceProvider(service);
                        return container;
                    });
                });

            endpointInstance = Endpoint.Start(endpointConfiguration).GetAwaiter().GetResult();

            _services.AddScoped(typeof(IEndpointInstance), x => endpointInstance);
        }
    }
}
