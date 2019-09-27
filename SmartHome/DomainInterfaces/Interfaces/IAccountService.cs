using System.Threading.Tasks;
using DomainInterfaces.Models;

namespace DomainInterfaces.Interfaces
{
    public interface IAccountService
    {
        Task<object> LoginAsync(User model, string jwtKey, string jwtIssuer, string jwtExpireDays);
        Task<object> RegisterAsync(User model, string jwtKey, string jwtIssuer, string jwtExpireDays);
    }
}
