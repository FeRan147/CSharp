using IdentityServices.Configuration;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace DependencyInjection.Modules
{
    public static class IdentityModule
    {
        public static void IdentityModuleRegister(this IServiceCollection services, IConfiguration configuration)
        {
            IdentityConfiguration.Configure(services, configuration);
            JwtConfiguration.Configure(services, configuration);
        }
    }
}
