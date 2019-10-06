using IdentityInterfaces.Interfaces;
using IdentityInterfaces.Models;
using IdentityServices.Managers;
using IdentityServices.Stores;
using InfrastructureServices.Contexts;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Text;

namespace DependencyInjection.Configs
{
    public class IdentityConfig
    {
        private IServiceCollection _services;
        private readonly IConfiguration _configuration;
        private readonly ILogger _logger;

        public IdentityConfig(IServiceCollection services, IConfiguration configuration, ILogger logger)
        {
            _services = services;
            _configuration = configuration;
            _logger = logger;
        }

        public void Configure()
        {
            _services.AddIdentity<ApplicationUser, ApplicationRole>()
                .AddEntityFrameworkStores<DefaultContext>()
                .AddRoleStore<ApplicationRoleStore>()
                .AddUserStore<ApplicationUserStore>()
                .AddUserManager<ApplicationUserManager>()
                .AddRoleManager<ApplicationRoleManager>()
                .AddSignInManager<ApplicationSignInManager>()
                .AddDefaultTokenProviders();

            _services.AddTransient<IApplicationUserManager, ApplicationUserManager>();
            _services.AddTransient<IApplicationSignInManager, ApplicationSignInManager>();
            _services.AddTransient<IApplicationRoleManager, ApplicationRoleManager>();
            _services.AddTransient<IApplicationUserStore, ApplicationUserStore>();
            _services.AddTransient<IApplicationRoleStore, ApplicationRoleStore>();
        }
    }
}
