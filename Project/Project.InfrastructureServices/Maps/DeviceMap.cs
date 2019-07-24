using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Project.Infrastructure.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Project.InfrastructureServices.Maps
{
    public class DeviceMap: IEntityTypeConfiguration<Device>
    {
        public static DeviceMap Instance = new DeviceMap();

        public void Configure(EntityTypeBuilder<Device> builder)
        {
            builder.HasIndex(t => t.Id).IsUnique();
        }
    }
}
