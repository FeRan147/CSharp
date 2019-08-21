using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Project.Infrastructure.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Project.InfrastructureServices.Maps
{
    class LogMap : IEntityTypeConfiguration<Log>
    {
        public static LogMap Instance = new LogMap();

        public void Configure(EntityTypeBuilder<Log> builder)
        {
            builder.HasIndex(l => l.Id).IsUnique();
        }
    }
}
