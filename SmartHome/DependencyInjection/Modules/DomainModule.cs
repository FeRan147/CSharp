using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;
using DependencyInjection.Configs;
using DomainInterfaces.Interfaces;
using DomainInterfaces.Messages.Device;
using DomainServices.Services;
using Microsoft.Extensions.Logging;
using NServiceBus;

namespace DependencyInjection.Modules
{
    public static class DomainModule
    {
        public static void Register(IServiceCollection services, IConfiguration configuration)
        {
            services.AddSingleton<IDeviceService, DeviceService>();

            services.AddLogging(loggingBuilder => loggingBuilder.AddDebug());

            var endpoint = Endpoint.Start(MicroServicesConfig.GetEndpointConfiguration(services, configuration)).GetAwaiter().GetResult();
            services.AddScoped(typeof(IEndpointInstance), x => endpoint);
        }
    }
}
