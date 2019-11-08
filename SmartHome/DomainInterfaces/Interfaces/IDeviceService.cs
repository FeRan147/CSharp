using DomainInterfaces.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DomainInterfaces.Interfaces
{
    public interface IDeviceService : IBaseService<Device>
    {
        Task<Device> GetByNameAsync(string name);
        Task<IList<Device>> GetAllFromMongoAsync();
        Task SetDeviceMongoAsync(Device device);
    }
}
