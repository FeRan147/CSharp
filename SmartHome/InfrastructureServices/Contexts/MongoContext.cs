using InfrastructureInterfaces.Interfaces;
using InfrastructureInterfaces.Models;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Text;

namespace InfrastructureServices.Contexts
{
    public class MongoContext : IMongoContext
    {
        private readonly IMongoDatabase _database = null;

        public MongoContext(IConfiguration configuration)
        {
            var client = new MongoClient(configuration.GetSection("Mongo").GetSection("ConnectionString").Value);
            if (client != null)
                _database = client.GetDatabase(configuration.GetSection("Mongo").GetSection("DatabaseName").Value);
        }

        public IMongoCollection<Device> Devices
        {
            get
            {
                return _database.GetCollection<Device>("Devices");
            }
        }

        public void Dispose()
        {

        }
    }
}
