using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Text;
using InfrastructureInterfaces.Interfaces;
using InfrastructureServices.Contexts;
using AIM = IdentityInterfaces.Models;
using AII = IdentityInterfaces.Interfaces;
using AIS = IdentityServices.Stores;
using AIMR = IdentityServices.Managers;
using System.IdentityModel.Tokens.Jwt;
using IdentityInterfaces.Models;
using IdentityServices.Stores;
using IdentityInterfaces.Interfaces;
using IdentityServices.Managers;
using DependencyInjection.Configs;
using Microsoft.Extensions.Logging;
using IdentityServices.Configuration;

namespace DependencyInjection.Modules
{
    public static class InfrastructureModule
    {
        public static void Register(IServiceCollection services, IConfiguration configuration)
        {
            services.AddSingleton<IContextFactory, ContextFactory>();
            services.AddDbContext<DefaultContext>(options => options.UseSqlServer(configuration.GetConnectionString("DefaultConnectionString")));

            IdentityConfiguration.Configure(services, configuration);

            JwtConfig.Configure(services, configuration);
        }
    }
}
