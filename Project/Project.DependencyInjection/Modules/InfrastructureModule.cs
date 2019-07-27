using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
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
        public void Register(IServiceCollection services, IConfiguration configuration)
        {
            services.AddSingleton<IContextFactory, ContextFactory>();
            services.AddDbContext<ProjectContext>(options => options.UseSqlServer(configuration.GetConnectionString("Project.ConnectionString")));
        }
    }
}
