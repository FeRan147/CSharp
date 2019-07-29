using Project.Infrastructure.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Project.Infrastructure.Interfaces
{
    public interface IFakeProjectContext : IDisposable
    {
        IList<User> GetUsers(bool includeDevices);
        User GetUser(int id, bool includeDevices);
        void DeleteUser(int id);
        void AddUser(User user);
        void UpdateUser(int id, User user);
        IList<Device> GetDevices(bool includeUser);
        Device GetDevice(int id, bool includeUser);
        void DeleteDevice(int id);
        void AddDevice(Device device);
        void UpdateDevice(int id, Device device);
        IList<User> GetPagedUsers(int currentPage, int onPage);
        IList<Device> GetPagedDevices(int currentPage, int onPage);
    }
}
