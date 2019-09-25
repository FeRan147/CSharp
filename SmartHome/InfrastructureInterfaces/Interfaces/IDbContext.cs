using System;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace InfrastructureInterfaces.Interfaces
{
    public interface IDbContext : IDisposable
    {
        int SaveChanges();

        EntityEntry Entry(object entity);
    }
}
