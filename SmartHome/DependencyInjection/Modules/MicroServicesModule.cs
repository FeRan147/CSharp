﻿using MicroServices.Messages;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using NServiceBus;
using NServiceBus.ObjectBuilder.MSDependencyInjection;
using System.Threading.Tasks;

namespace DependencyInjection.Modules
{
    public static class MicroServicesModule
    {
        public static void MicroServicesModuleRegister(this IServiceCollection services, IConfiguration configuration)
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
                assembly: typeof(MqttReceivedMessage).Assembly,
                destination: configuration.GetSection("MicroServices").GetSection("Endpoint").Value);
            routerConfig.RouteToEndpoint(
                assembly: typeof(MqttResponseMessage).Assembly,
                destination: configuration.GetSection("MicroServices").GetSection("Endpoint").Value);
            routerConfig.RouteToEndpoint(
                assembly: typeof(MqttConnectMessage).Assembly,
                destination: configuration.GetSection("MicroServices").GetSection("Endpoint").Value);
            routerConfig.RouteToEndpoint(
                assembly: typeof(MqttDisconnectMessage).Assembly,
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

            endpointInstance = Task.Run(async () => await Endpoint.Start(endpointConfiguration)).Result;

            services.AddSingleton(typeof(IEndpointInstance), x => endpointInstance);
        }
    }
}
