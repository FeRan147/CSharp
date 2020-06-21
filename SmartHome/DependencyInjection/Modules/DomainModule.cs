using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using DomainInterfaces.Interfaces;
using DomainServices.Services;

namespace DependencyInjection.Modules
{
    public static class DomainModule
    {
        public static void DomainModuleRegister(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddScoped<IDeviceService, DeviceService>();
            services.AddScoped<ILogService, LogService>();
            services.AddScoped<IAccountService, AccountService>();
        }
    }
}
