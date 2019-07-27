using Project.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Project.Domain.Interfaces
{
    public interface IDeviceFakeService
    {
        IList<Device> GetDevices(bool includeUser);
        Device GetDevice(int id, bool includeUser);
        void DeleteDevice(int id);
        void AddDevice(Device device);
        void UpdateDevice(int id, Device device);
    }
}
