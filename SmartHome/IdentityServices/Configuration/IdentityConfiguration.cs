using IdentityInterfaces.Interfaces;
using IdentityInterfaces.Models;
using IdentityServices.Managers;
using IdentityServices.Stores;
using InfrastructureServices.Contexts;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace IdentityServices.Configuration
{
    public static class IdentityConfiguration
    {
        public static void Configure(IServiceCollection services, IConfiguration configuration)
        {
            services.AddIdentity<User, Role>()
                .AddEntityFrameworkStores<DefaultContext>()
                .AddRoleStore<ApplicationRoleStore>()
                .AddUserStore<ApplicationUserStore>()
                .AddUserManager<ApplicationUserManager>()
                .AddRoleManager<ApplicationRoleManager>()
                .AddSignInManager<ApplicationSignInManager>()
                .AddDefaultTokenProviders();

            services.AddTransient<IApplicationUserManager, ApplicationUserManager>();
            services.AddTransient<IApplicationSignInManager, ApplicationSignInManager>();
            services.AddTransient<IApplicationRoleManager, ApplicationRoleManager>();
            services.AddTransient<IApplicationUserStore, ApplicationUserStore>();
            services.AddTransient<IApplicationRoleStore, ApplicationRoleStore>();
        }
    }
}
