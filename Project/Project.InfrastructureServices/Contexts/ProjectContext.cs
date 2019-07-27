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

            builder.Entity<User>().HasData(
                new List<User>()
                {
                    new User
                    {
                        Id = 1, UserName = "Паша"
                    },
                    new User
                    {
                        Id = 2, UserName = "Женя"
                    }
                }
            );

            builder.Entity<Device>().HasData(
                new List<Device>()
                {
                    new Device { Id = 1, Name = "Телевизор", Availibility = false, UserId = 1 },
                    new Device { Id = 2, Name = "Холодильник", Availibility = false, UserId = 1 },
                    new Device { Id = 3, Name = "Телефон", Availibility = true, UserId = 1 },
                    new Device { Id = 4, Name = "Вентилятор", Availibility = false, UserId = 1 },
                    new Device { Id = 5, Name = "Кондиционер", Availibility = true, UserId = 1 },
                    new Device { Id = 6, Name = "Приставка", Availibility = false, UserId = 2 },
                    new Device { Id = 7, Name = "Мультиварка", Availibility = false, UserId = 2 },
                    new Device { Id = 8, Name = "Компьютер", Availibility = true, UserId = 2 },
                    new Device { Id = 9, Name = "Принтер", Availibility = false, UserId = 2 },
                    new Device { Id = 10, Name = "Сканер", Availibility = true, UserId = 2 }
                }
            );

            base.OnModelCreating(builder);
        }

        public DbSet<Device> Devices { get; set; }
    }
}
