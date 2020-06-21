using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using InfrastructureInterfaces.Interfaces;
using InfrastructureServices.Contexts;
using AIM = IdentityInterfaces.Models;
using AII = IdentityInterfaces.Interfaces;
using AIS = IdentityServices.Stores;
using AIMR = IdentityServices.Managers;

namespace DependencyInjection.Modules
{
    public static class InfrastructureModule
    {
        public static void InfrastructureModuleRegister(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddSingleton<IContextFactory, ContextFactory>();
            services.AddDbContext<DefaultContext>(options => options.UseSqlServer(configuration.GetConnectionString("DefaultConnectionString")));
        }
    }
}
