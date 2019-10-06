using DependencyInjection.Modules;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Helpers
{
    public class RegisterDependencyInjectionModules
    {
        private IServiceCollection _services;
        private IConfiguration _configuration;

        public RegisterDependencyInjectionModules(IServiceCollection services, IConfiguration configuration)
        {
            _services = services;
            _configuration = configuration;
        }

        public void Register()
        {
            new InfrastructureModule(_services, _configuration).Register();
            new DomainModule(_services, _configuration).Register();
        }
    }
}
