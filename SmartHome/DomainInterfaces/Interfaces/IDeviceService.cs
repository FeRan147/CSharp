using DomainInterfaces.Models;
using System.Threading.Tasks;

namespace DomainInterfaces.Interfaces
{
    public interface IDeviceService : IBaseService<Device>
    {
        Task<Device> GetByNameAsync(string name);
    }
}
