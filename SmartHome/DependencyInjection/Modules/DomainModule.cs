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
        private readonly IConfiguration _configuration;
        private readonly ILogger _logger;

        public DomainModule(IServiceCollection services, IConfiguration configuration, ILogger logger)
        {
            _services = services;
            _configuration = configuration;
            _logger = logger;
        }

        public void Register()
        {
            _services.AddSingleton<IDeviceService, DeviceService>();

            new MicroServicesConfig(_services, _configuration, _logger).Configure();

            new MqttServerServiceConfig(_services, _configuration, _logger).Configure();
        }
    }
}
