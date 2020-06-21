using IdentityServices.Configuration;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

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
