using DomainInterfaces.Models;
using DomainInterfaces.MongoModels;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DomainInterfaces.Interfaces
{
    public interface IDeviceService : IBaseService<Device>
    {
        Task<Device> GetByNameAsync(string name);
        Task<IList<Device>> GetAllFromMongoAsync();
        Task ConnectDeviceAsync(Device device);
        Task DisconnectDeviceAsync(Device device);
        Task ReceiveMqttMessageAsync(TopicDevice topicDevice);
    }
}
