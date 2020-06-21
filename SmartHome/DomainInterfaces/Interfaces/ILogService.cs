using DomainInterfaces.Models;
using System;
using System.Threading.Tasks;

namespace DomainInterfaces.Interfaces
{
    public interface ILogService : IDisposable
    {
        Task SaveAsync(Log item);
    }
}
