using System;
using System.Collections.Generic;
using System.Text;
using DataAccess.DA.Models;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.DA.Interfaces
{
    public interface ITestContext : IDbContext
    {
        DbSet<Test> Tests { get; set; }
    }
}
