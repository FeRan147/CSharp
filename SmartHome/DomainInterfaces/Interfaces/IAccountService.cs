using DomainInterfaces.Models;
using System;
using System.Threading.Tasks;

namespace DomainInterfaces.Interfaces
{
    public interface IAccountService : IDisposable
    {
        Task<object> LoginAsync(User user);
        Task<object> RegisterAsync(User user);
    }
}
