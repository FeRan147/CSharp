using InfrastructureInterfaces.MongoModels;
using MongoDB.Driver;
using System;

namespace InfrastructureInterfaces.Interfaces
{
    public interface IMongoContext : IDisposable
    {
        IMongoCollection<OnlineDevice> OnlineDevices { get; }
        IMongoCollection<TopicDevice> TopicDevices { get; }
    }
}
