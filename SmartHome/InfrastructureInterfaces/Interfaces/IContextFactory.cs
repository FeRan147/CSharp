using System;

namespace InfrastructureInterfaces.Interfaces
{
    public interface IContextFactory : IDisposable
    {
        IDefaultContext GetDefaultContext();
        IMongoContext GetMongoContext();
    }
}
