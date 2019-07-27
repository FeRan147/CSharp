using Microsoft.EntityFrameworkCore;
using Project.Infrastructure.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Project.Infrastructure.Interfaces
{
    public interface IProjectContext: IDbContext
    {
        DbSet<Device> Devices { get; set; }
        DbSet<User> Users { get; set; }
    }
}
