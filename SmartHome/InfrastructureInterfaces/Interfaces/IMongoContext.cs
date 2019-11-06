using InfrastructureInterfaces.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Text;

namespace InfrastructureInterfaces.Interfaces
{
    public interface IMongoContext : IDisposable
    {
        IMongoCollection<Device> Devices { get; }
    }
}
