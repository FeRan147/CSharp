using Project.Infrastructure.Interfaces;
using Project.Infrastructure.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Project.InfrastructureServices.Contexts
{
    public class FakeProjectContext: IFakeProjectContext
    {
        public List<Device> Database = new List<Device>()
        {
            new Device { Id = 1, Name = "Телевизор", Availibility = false },
            new Device { Id = 2, Name = "Холодильник", Availibility = false },
            new Device { Id = 3, Name = "Телефон", Availibility = true },
            new Device { Id = 4, Name = "Вентилятор", Availibility = false },
            new Device { Id = 5, Name = "Кондиционер", Availibility = true }
        };

        public IList<Device> GetDevices()
        {
            var devices = Database;

            return devices.ToList();
        }

        public Device GetDevice(int id)
        {
            return Database.FirstOrDefault(_ => _.Id == id);
        }

        public void DeleteDevice(int id)
        {
            var device = Database.FirstOrDefault(_ => _.Id == id);
            Database.Remove(device);
        }

        public void AddDevice(Device device)
        {
            var lastDevice = Database.LastOrDefault();
            var newId = lastDevice.Id + 1;
            device.Id = newId;
            Database.Add(device);
        }

        public void UpdateDevice(int id, Device device)
        {
            var findDevice = Database.FirstOrDefault(_ => _.Id == id);
            device.Id = findDevice.Id;
            Database.Remove(findDevice);
            Database.Add(device);
        }

        public void Dispose()
        {
        }
    }
}
