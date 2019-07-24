using Project.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Project.Domain.Interfaces
{
    public interface IDeviceService
    {
        IList<Device> GetDevices();
        Device GetDevice(int id);
        void DeleteDevice(int id);
        void AddDevice(Device device);
        void UpdateDevice(int id, Device device);
    }
}
