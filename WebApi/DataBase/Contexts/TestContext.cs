using System;
using System.Collections.Generic;
using System.Text;
using DataBase.Interfaces;
using DataBase.Maps;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Models;

namespace DataBase.Contexts
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
