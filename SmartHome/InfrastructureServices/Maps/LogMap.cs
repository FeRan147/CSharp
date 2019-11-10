using InfrastructureInterfaces.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace InfrastructureServices.Maps
{
    public class LogMap : IEntityTypeConfiguration<Log>
    {
        public static LogMap Instance = new LogMap();

        public void Configure(EntityTypeBuilder<Log> builder)
        {
            builder.HasIndex(d => d.Id).IsUnique();
        }
    }
}
