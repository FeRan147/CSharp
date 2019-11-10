using IdentityInterfaces.Models;
using InfrastructureInterfaces.Models;
using Microsoft.EntityFrameworkCore;

namespace InfrastructureInterfaces.Interfaces
{
    public interface IDefaultContext : IDbContext
    {
        DbSet<Device> Devices { get; set; }
        DbSet<Log> Logs { get; set; }
        DbSet<User> Users { get; set; }
        DbSet<Role> Roles { get; set; }
    }
}
