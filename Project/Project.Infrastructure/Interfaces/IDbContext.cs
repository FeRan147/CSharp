using Microsoft.EntityFrameworkCore.ChangeTracking;
using System;
using System.Collections.Generic;
using System.Text;

namespace Project.Infrastructure.Interfaces
{
    public interface IDbContext: IDisposable
    {
        int SaveChanges();

        EntityEntry Entry(object entity);
    }
}
