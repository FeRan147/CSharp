using System;
using System.Collections.Generic;
using System.Text;
using DomainInterfaces.Messages.Device;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using NServiceBus;
using NServiceBus.ObjectBuilder.MSDependencyInjection;

namespace DependencyInjection.Configs
{
    public static class MicroServicesConfig
    {
        public static IEndpointInstance GetEndpointConfiguration(IServiceCollection services, IConfiguration configuration)
        {
            IEndpointInstance endpointInstance = null;
            services.AddSingleton<IMessageSession>(_ => endpointInstance);

            var endpointConfiguration = new EndpointConfiguration(configuration.GetSection("MicroServices").GetSection("Endpoint").Value);
            var transport = endpointConfiguration.UseTransport<RabbitMQTransport>();
            transport.ConnectionString(configuration.GetSection("Transport")["RabbitMQConnectionString"]);
            transport.UsePublisherConfirms(true);
            transport.UseDirectRoutingTopology();

            endpointConfiguration.EnableInstallers();
            endpointConfiguration.EnableCallbacks();

            var routerConfig = transport.Routing();

            routerConfig.RouteToEndpoint(
                assembly: typeof(AddDevice).Assembly,
                destination: configuration.GetSection("MicroServices").GetSection("Endpoint").Value);
            routerConfig.RouteToEndpoint(
                assembly: typeof(UpdateDevice).Assembly,
                destination: configuration.GetSection("MicroServices").GetSection("Endpoint").Value);
            routerConfig.RouteToEndpoint(
                assembly: typeof(RemoveDevice).Assembly,
                destination: configuration.GetSection("MicroServices").GetSection("Endpoint").Value);

            var discriminator = configuration.GetSection("MicroServices").GetSection("Discriminator").Value;
            endpointConfiguration.MakeInstanceUniquelyAddressable(discriminator);

            UpdateableServiceProvider container = null;
            endpointConfiguration.UseContainer<ServicesBuilder>(
                customizations: customizations =>
                {
                    customizations.ExistingServices(services);
                    customizations.ServiceProviderFactory(service =>
                    {
                        container = new UpdateableServiceProvider(service);
                        return container;
                    });
                });

            endpointInstance = Endpoint.Start(endpointConfiguration).GetAwaiter().GetResult();

            return endpointInstance;
        }
    }
}
