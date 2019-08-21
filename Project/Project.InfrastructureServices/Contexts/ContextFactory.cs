using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Project.Infrastructure.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Project.InfrastructureServices.Contexts
{
    public class ContextFactory: IContextFactory
    {
        private readonly IConfiguration _configuration;

        public ContextFactory(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public IProjectContext GetProjectContext()
        {

            var dbOptionsBuilder = new DbContextOptionsBuilder();
            dbOptionsBuilder.UseSqlServer(_configuration.GetConnectionString("Project.ConnectionString"));

            return new ProjectContext(dbOptionsBuilder.Options);
        }

        public void Dispose()
        {
        }
    }
}
