using System;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace DataBase.Interfaces
{
    public interface IDbContext : IDisposable
    {
        int SaveChanges();

        EntityEntry Entry(object entity);
    }
}
