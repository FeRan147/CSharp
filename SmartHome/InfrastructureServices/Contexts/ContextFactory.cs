using InfrastructureInterfaces.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace InfrastructureServices.Contexts
{
    public class ContextFactory : IContextFactory
    {
        private readonly IConfiguration _configuration;

        public ContextFactory(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public IDefaultContext GetDefaultContext()
        {

            var dbOptionsBuilder = new DbContextOptionsBuilder();
            dbOptionsBuilder.UseSqlServer(_configuration.GetConnectionString("DefaultConnectionString"));

            return new DefaultContext(dbOptionsBuilder.Options, _configuration);
        }

        public void Dispose()
        {
        }
    }
}
