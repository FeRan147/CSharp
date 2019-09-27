using System;
using System.Collections.Generic;
using System.Text;
using DomainInterfaces.Messages.Device;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using NServiceBus;

namespace DependencyInjection.Configs
{
    public static class MicroServicesConfig
    {
        public static EndpointConfiguration GetEndpointConfiguration(IServiceCollection services, IConfiguration configuration)
        {
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

            endpointConfiguration.UseContainer<ServicesBuilder>(
                customizations: customizations =>
                {
                    customizations.ExistingServices(services);
                });

            return endpointConfiguration;
        }
    }
}
