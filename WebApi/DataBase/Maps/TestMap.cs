using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Models;

namespace DataBase.Maps
{
    public class TestMap : IEntityTypeConfiguration<Test>
    {
        public static TestMap Instance = new TestMap();

        public void Configure(EntityTypeBuilder<Test> builder)
        {
            builder.HasIndex(t => t.Id).HasName("TestUnique").IsUnique();
        }
    }
}
