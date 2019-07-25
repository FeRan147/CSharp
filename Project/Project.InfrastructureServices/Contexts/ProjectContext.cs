using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Project.Infrastructure.Interfaces;
using Project.Infrastructure.Models;
using Project.InfrastructureServices.Maps;
using System;
using System.Collections.Generic;
using System.Text;

namespace Project.InfrastructureServices.Contexts
{
    public class ProjectContext: IdentityDbContext<User, Role, int>, IProjectContext
    {
        public ProjectContext(DbContextOptions options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfiguration(DeviceMap.Instance);

            base.OnModelCreating(builder);
        }

        public DbSet<Device> Devices { get; set; }
    }
}
