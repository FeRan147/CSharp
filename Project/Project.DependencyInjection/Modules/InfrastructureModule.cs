using Microsoft.Extensions.DependencyInjection;
using Project.DependencyInjection.Interfaces;
using Project.Infrastructure.Interfaces;
using Project.InfrastructureServices.Contexts;
using System;
using System.Collections.Generic;
using System.Text;

namespace Project.DependencyInjection.Modules
{
    public class InfrastructureModule: IModule
    {
        public void Register(IServiceCollection services)
        {
            services.AddSingleton<IContextFactory, ContextFactory>();
        }
    }
}
