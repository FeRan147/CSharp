using DomainInterfaces.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DomainInterfaces.Interfaces
{
    public interface ILogService : IDisposable
    {
        Task SaveAsync(Log item);
    }
}
