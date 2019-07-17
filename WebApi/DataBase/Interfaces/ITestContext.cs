using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Models;

namespace DataBase.Interfaces
{
    public interface ITestContext : IDbContext
    {
        DbSet<Test> Tests { get; set; }
    }
}
