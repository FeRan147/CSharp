using IdentityInterfaces.Models;
using InfrastructureInterfaces.Models;
using Microsoft.EntityFrameworkCore;

namespace InfrastructureInterfaces.Interfaces
{
    public interface IDefaultContext : IDbContext
    {
        DbSet<Device> Devices { get; set; }
        DbSet<ApplicationUser> Users { get; set; }
        DbSet<ApplicationRole> Roles { get; set; }
    }
}
