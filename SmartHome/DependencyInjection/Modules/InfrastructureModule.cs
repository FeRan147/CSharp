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

namespace DependencyInjection.Modules
{
    public class InfrastructureModule
    {
        private IServiceCollection _services;
        private IConfiguration _configuration;

        public InfrastructureModule(IServiceCollection services, IConfiguration configuration)
        {
            _services = services;
            _configuration = configuration;
        }

        public void Register()
        {
            _services.AddSingleton<IContextFactory, ContextFactory>();
            _services.AddDbContext<DefaultContext>(options => options.UseSqlServer(_configuration.GetConnectionString("DefaultConnectionString")));

            new IdentityConfig(_services, _configuration).Configure();

            new JwtConfig(_services, _configuration).Configure();
        }
    }
}
