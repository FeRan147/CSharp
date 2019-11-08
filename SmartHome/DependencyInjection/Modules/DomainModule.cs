using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;
using DependencyInjection.Configuration;
using DomainInterfaces.Interfaces;
using DomainServices.Services;
using Microsoft.Extensions.Logging;
using NServiceBus;

namespace DependencyInjection.Modules
{
    public static class DomainModule
    {
        public static void Register(IServiceCollection services, IConfiguration configuration)
        {
            services.AddScoped<IDeviceService, DeviceService>();
            services.AddScoped<IAccountService, AccountService>();
        }
    }
}
