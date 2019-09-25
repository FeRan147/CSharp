using InfrastructureInterfaces.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace InfrastructureServices.Maps
{
    public class DeviceMap : IEntityTypeConfiguration<Device>
    {
        public static DeviceMap Instance = new DeviceMap();

        public void Configure(EntityTypeBuilder<Device> builder)
        {
            builder.HasIndex(d => d.Id).IsUnique();
        }
    }
}
