using InfrastructureInterfaces.Interfaces;
using InfrastructureInterfaces.MongoModels;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;

namespace InfrastructureServices.Contexts
{
    public class MongoContext : IMongoContext
    {
        private readonly IMongoDatabase _database;

        public MongoContext(IConfiguration configuration)
        {
            var client = new MongoClient(configuration.GetSection("Mongo").GetSection("ConnectionString").Value);
            _database = client.GetDatabase(configuration.GetSection("Mongo").GetSection("DatabaseName").Value);
        }

        public IMongoCollection<OnlineDevice> OnlineDevices => _database.GetCollection<OnlineDevice>("OnlineDevices");

        public IMongoCollection<TopicDevice> TopicDevices => _database.GetCollection<TopicDevice>("TopicDevices");

        public void Dispose()
        {

        }
    }
}
