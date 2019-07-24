using Microsoft.Extensions.DependencyInjection;
using Project.DependencyInjection.Interfaces;
using Project.Domain.Interfaces;
using Project.DomainServices.Services;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;

namespace Project.DependencyInjection.Modules
{
    public class DomainModule: IModule
    {
        public void Register(IServiceCollection services)
        {
            services.AddScoped<IDeviceFakeService, DeviceFakeService>();
            services.AddScoped<IDeviceService, DeviceService>();
        }
    }
}
