using Project.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Project.Domain.Interfaces
{
    public interface IDeviceService
    {
        Task<IList<Device>> GetDevicesAsync(bool includeUser);
        Task<Device> GetDeviceAsync(int id, bool includeUser);
        Task DeleteDeviceAsync(int id);
        Task SaveDeviceAsync(int? id, Device device);
    }
}
