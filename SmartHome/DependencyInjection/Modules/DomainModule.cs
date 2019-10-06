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

namespace DependencyInjection.Modules
{
    public class DomainModule
    {
        private IServiceCollection _services;
        private IConfiguration _configuration;

        public DomainModule(IServiceCollection services, IConfiguration configuration)
        {
            _services = services;
            _configuration = configuration;
        }

        public void Register()
        {
            _services.AddSingleton<IDeviceService, DeviceService>();

            _services.AddLogging(loggingBuilder => loggingBuilder.AddDebug());

            new MicroServicesConfig(_services, _configuration).Configure();

            new MqttServerServiceConfig(_services, _configuration).Configure();
        }
    }
}
