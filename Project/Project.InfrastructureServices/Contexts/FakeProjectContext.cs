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
        public List<User> Users = new List<User>()
        {
            new User
            {
                Id = 1, UserName = "Паша"
            },
            new User
            {
                Id = 2, UserName = "Женя"
            }

        };

        public List<Device> Devices = new List<Device>()
        {
            new Device { Id = 1, Name = "Телевизор", Availibility = false, UserId = 1 },
            new Device { Id = 2, Name = "Холодильник", Availibility = false, UserId = 1 },
            new Device { Id = 3, Name = "Телефон", Availibility = true, UserId = 1 },
            new Device { Id = 4, Name = "Вентилятор", Availibility = false, UserId = 1 },
            new Device { Id = 5, Name = "Кондиционер", Availibility = true, UserId = 1 },
            new Device { Id = 6, Name = "Приставка", Availibility = false, UserId = 2 },
            new Device { Id = 7, Name = "Мультиварка", Availibility = false, UserId = 2 },
            new Device { Id = 8, Name = "Компьютер", Availibility = true, UserId = 2 },
            new Device { Id = 9, Name = "Принтер", Availibility = false, UserId = 2 },
            new Device { Id = 10, Name = "Сканер", Availibility = true, UserId = 2 }
        };

        public IList<User> GetUsers(bool includeDevices)
        {
            var users = Users;

            if(includeDevices)
            {
                users.ForEach(user =>
                    user.Devices = Devices.FindAll(device => device.Id == user.Id).ToList());
            }

            return users.ToList();
        }

        public User GetUser(int id, bool includeDevices)
        {
            var user = Users.FirstOrDefault(_ => _.Id == id);

            if(includeDevices)
            {
                user.Devices = Devices.FindAll(device => device.Id == user.Id).ToList();
            }

            return user;
        }

        public void DeleteUser(int id)
        {
            var user = Users.FirstOrDefault(_ => _.Id == id);
            Users.Remove(user);
        }

        public void AddUser(User user)
        {
            var lastUser = Users.LastOrDefault();
            var newId = lastUser.Id + 1;
            user.Id = newId;
            Users.Add(user);
        }

        public void UpdateUser(int id, User user)
        {
            var findUser = Users.FirstOrDefault(_ => _.Id == id);
            user.Id = findUser.Id;
            Users.Remove(findUser);
            Users.Add(user);
        }

        public IList<Device> GetDevices(bool includeUser)
        {
            var devices = Devices;

            if(includeUser)
            {
                devices.ForEach(device =>
                    device.User = Users.FirstOrDefault(user => user.Id == device.UserId)
                );
            }

            return devices.ToList();
        }

        public Device GetDevice(int id, bool includeUser)
        {
            var device = Devices.FirstOrDefault(_ => _.Id == id);

            if(includeUser)
            {
                device.User = Users.FirstOrDefault(user => user.Id == device.UserId);
            }
            return device;
        }

        public void DeleteDevice(int id)
        {
            var device = Devices.FirstOrDefault(_ => _.Id == id);
            Devices.Remove(device);
        }

        public void AddDevice(Device device)
        {
            var lastDevice = Devices.LastOrDefault();
            var newId = lastDevice.Id + 1;
            device.Id = newId;
            Devices.Add(device);
        }

        public void UpdateDevice(int id, Device device)
        {
            var findDevice = Devices.FirstOrDefault(_ => _.Id == id);
            device.Id = findDevice.Id;
            Devices.Remove(findDevice);
            Devices.Add(device);
        }

        public void Dispose()
        {
        }
    }
}
