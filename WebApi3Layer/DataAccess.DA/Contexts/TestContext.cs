using DataAccess.DA.Interfaces;
using DataAccess.DA.Maps;
using DataAccess.DA.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.DA.Contexts
{
    public class TestContext: IdentityDbContext<User, Role, int>, ITestContext
    {
        public TestContext(DbContextOptions options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfiguration(TestMap.Instance);

            base.OnModelCreating(builder);
        }

        public DbSet<Test> Tests { get; set; }
    }
}
