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

namespace DependencyInjection.Modules
{
    public static class InfrastructureModule
    {
        public static void Register(IServiceCollection services, IConfiguration configuration)
        {
            services.AddSingleton<IContextFactory, ContextFactory>();
            services.AddDbContext<DefaultContext>(options => options.UseSqlServer(configuration.GetConnectionString("DefaultConnectionString")));
            services.AddIdentity<ApplicationUser, ApplicationRole>()
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

            JwtSecurityTokenHandler.DefaultInboundClaimTypeMap.Clear();

            services
                .AddAuthentication(options =>
                {
                    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                    options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
                    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;

                })
                .AddJwtBearer(cfg =>
                {
                    cfg.RequireHttpsMetadata = false;
                    cfg.SaveToken = true;
                    cfg.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidIssuer = configuration.GetSection("Identity")["JwtIssuer"],
                        ValidAudience = configuration.GetSection("Identity")["JwtIssuer"],
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration.GetSection("Identity")["JwtKey"])),
                        ClockSkew = TimeSpan.Zero // remove delay of token when expire
                    };
                });
        }
    }
}
