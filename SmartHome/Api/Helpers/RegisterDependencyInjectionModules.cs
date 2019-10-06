using DependencyInjection.Modules;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Helpers
{
    public class RegisterDependencyInjectionModules
    {
        private IServiceCollection _services;
        private readonly IConfiguration _configuration;
        private readonly ILogger _logger;

        public RegisterDependencyInjectionModules(IServiceCollection services, IConfiguration configuration, ILogger logger)
        {
            _services = services;
            _configuration = configuration;
            _logger = logger;
        }

        public void Register()
        {
            new InfrastructureModule(_services, _configuration, _logger).Register();
            new DomainModule(_services, _configuration, _logger).Register();
        }
    }
}
