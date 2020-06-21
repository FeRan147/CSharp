using DependencyInjection.Modules;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Api.Helpers
{
    public static class DependencyInjectionModulesExtension
    {
        public static void RegisterDependencyInjectionModules(this IServiceCollection services, IConfiguration configuration)
        {
            services.InfrastructureModuleRegister(configuration);
            services.IdentityModuleRegister(configuration);
            services.DomainModuleRegister(configuration);
            services.MqttModuleRegister(configuration);
            services.MicroServicesModuleRegister(configuration);
        }
    }
}
