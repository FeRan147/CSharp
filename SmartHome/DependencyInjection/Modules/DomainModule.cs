using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;
using DependencyInjection.Configs;
using DomainInterfaces.Interfaces;
using DomainServices.Services;
using Microsoft.Extensions.Logging;
using NServiceBus;
using MicroServices.Configuration;
using MQTTBroker.Configuration;
using MQTTBroker;

namespace DependencyInjection.Modules
{
    public static class DomainModule
    {
        public static void Register(IServiceCollection services, IConfiguration configuration)
        {
            services.AddSingleton<IDeviceService, DeviceService>();

            MicroServicesConfiguration.Configure(services, configuration);

            MqttServerServiceConfiguration.Configure(services, configuration);

            ManagedClient.RunAsync(services, configuration).GetAwaiter().GetResult();
        }
    }
}
