using DependencyInjection.Modules;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Helpers
{
    public static class RegisterDependencyInjectionModules
    {
        public static void Register(IServiceCollection services, IConfiguration configuration)
        {
            InfrastructureModule.Register(services, configuration);
            DomainModule.Register(services, configuration);
        }
    }
}
