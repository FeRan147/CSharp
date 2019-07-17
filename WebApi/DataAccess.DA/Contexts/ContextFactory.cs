using System;
using System.Collections.Generic;
using System.Text;
using DataAccess.DA.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace DataAccess.DA.Contexts
{
    public class ContextFactory : IContextFactory
    {
        private readonly IConfiguration _configuration;

        public ContextFactory(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public ITestContext GetTestContext()
        {

            var dbOptionsBuilder = new DbContextOptionsBuilder();
            dbOptionsBuilder.UseSqlServer(_configuration.GetConnectionString("Test"));

            return new TestContext(dbOptionsBuilder.Options);
        }

        public void Dispose()
        {
        }
    }
}
