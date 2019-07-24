using Project.Infrastructure.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Project.Infrastructure.Interfaces
{
    public interface IFakeDeviceContext : IDisposable
    {
        IList<Device> GetDevices();
        Device GetDevice(int id);
        void DeleteDevice(int id);
        void AddDevice(Device device);
        void UpdateDevice(int id, Device device);
    }
}
