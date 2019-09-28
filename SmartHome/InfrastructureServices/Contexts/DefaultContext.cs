using System.Collections.Generic;
using IdentityInterfaces.Models;
using InfrastructureInterfaces.Interfaces;
using InfrastructureInterfaces.Models;
using InfrastructureServices.Maps;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace InfrastructureServices.Contexts
{
    public class DefaultContext : IdentityDbContext<ApplicationUser, ApplicationRole, string>, IDefaultContext
    {
        private readonly IConfiguration _configuration;

        private readonly IHttpContextAccessor _httpContextAccessor;

        public DefaultContext(DbContextOptions dbContextOptions, IHttpContextAccessor httpContextAccessor, IConfiguration configuration) : base(dbContextOptions)
        {
            _configuration = configuration;
            _httpContextAccessor = httpContextAccessor;
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfiguration(DeviceMap.Instance);

            builder.Entity<ApplicationUser>().HasData(
                new List<ApplicationUser>()
                {
                    new ApplicationUser
                    {
                        Id = "1", UserName = "Паша"
                    },
                    new ApplicationUser
                    {
                        Id = "2", UserName = "Женя"
                    }
                }
            );

            builder.Entity<ApplicationRole>().HasData(
                new List<ApplicationRole>()
                {
                    new ApplicationRole
                    {
                        Id = "1", Name = "Read/Write/Delete"
                    },
                    new ApplicationRole
                    {
                        Id = "2", Name = "only Read"
                    }
                }
            ); ;

            builder.Entity<Device>().HasData(
                new List<Device>()
                {
                    new Device { Id = 1, Name = "Телевизор", Availibility = false, /*UserId = 1*/ },
                    new Device { Id = 2, Name = "Холодильник", Availibility = false, /*UserId = 1*/ },
                    new Device { Id = 3, Name = "Телефон", Availibility = true, /*UserId = 1*/ },
                    new Device { Id = 4, Name = "Вентилятор", Availibility = false, /*UserId = 1*/ },
                    new Device { Id = 5, Name = "Кондиционер", Availibility = true, /*UserId = 1*/ },
                    new Device { Id = 6, Name = "Приставка", Availibility = false, /*UserId = 2*/ },
                    new Device { Id = 7, Name = "Мультиварка", Availibility = false, /*UserId = 2*/ },
                    new Device { Id = 8, Name = "Компьютер", Availibility = true, /*UserId = 2*/ },
                    new Device { Id = 9, Name = "Принтер", Availibility = false, /*UserId = 2*/ },
                    new Device { Id = 10, Name = "Сканер", Availibility = true, /*UserId = 2*/ }
                }
            );

            base.OnModelCreating(builder);
        }

        public DbSet<Device> Devices { get; set; }
    }
}
