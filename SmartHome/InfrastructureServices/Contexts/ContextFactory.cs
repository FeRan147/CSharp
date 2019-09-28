using InfrastructureInterfaces.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace InfrastructureServices.Contexts
{
    public class ContextFactory : IContextFactory
    {
        private readonly IConfiguration _configuration;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public ContextFactory(IConfiguration configuration, IHttpContextAccessor httpContextAccessor)
        {
            _configuration = configuration;
            _httpContextAccessor = httpContextAccessor;
        }

        public IDefaultContext GetDefaultContext()
        {

            var dbOptionsBuilder = new DbContextOptionsBuilder();
            dbOptionsBuilder.UseSqlServer(_configuration.GetConnectionString("DefaultConnectionString"));

            return new DefaultContext(dbOptionsBuilder.Options, _httpContextAccessor, _configuration);
        }

        public void Dispose()
        {
        }
    }
}
