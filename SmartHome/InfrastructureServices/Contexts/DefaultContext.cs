using System.Collections.Generic;
using IdentityInterfaces.Models;
using InfrastructureInterfaces.Interfaces;
using InfrastructureInterfaces.Models;
using InfrastructureServices.Maps;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace InfrastructureServices.Contexts
{
    public class DefaultContext : IdentityDbContext<User, Role, string>, IDefaultContext
    {
        private readonly IConfiguration _configuration;


        public DefaultContext(DbContextOptions dbContextOptions, IConfiguration configuration) : base(dbContextOptions)
        {
            _configuration = configuration;
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfiguration(DeviceMap.Instance);
            builder.ApplyConfiguration(LogMap.Instance);

            builder.Entity<Role>().HasData(
                new List<Role>()
                {
                    new Role
                    {
                        Id = "1", Name = "Read/Write/Delete"
                    },
                    new Role
                    {
                        Id = "2", Name = "Only Read"
                    }
                }
            ); ;

            base.OnModelCreating(builder);
        }

        public DbSet<Device> Devices { get; set; }
        public DbSet<Log> Logs { get; set; }
    }
}
