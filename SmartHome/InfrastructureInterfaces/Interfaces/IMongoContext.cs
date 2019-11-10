using InfrastructureInterfaces.MongoModels;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Text;

namespace InfrastructureInterfaces.Interfaces
{
    public interface IMongoContext : IDisposable
    {
        IMongoCollection<OnlineDevice> OnlineDevices { get; }
        IMongoCollection<TopicDevice> TopicDevices { get; }
    }
}
