using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Project.Domain.Interfaces;
using Project.Domain.Models;
using Project.Infrastructure.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using I = Project.Infrastructure.Models;

namespace Project.DomainServices.Services
{
    public class DeviceService : IDeviceService
    {
        private readonly IMapper _mapper;
        private readonly IContextFactory _contextFactory;

        public DeviceService(IMapper mapper, IContextFactory contextFactory)
        {
            _mapper = mapper;
            _contextFactory = contextFactory;
        }

        public async Task<IList<Device>> GetDevicesAsync(bool includeUser)
        {
            using (var context = _contextFactory.GetProjectContext())
            {
                var devicesQuery = context.Devices.AsQueryable();

                if(includeUser)
                {
                    devicesQuery = devicesQuery.Include(_ => _.User);
                }

                var devices = await devicesQuery.ToListAsync();

                return devices.Select(item =>
                {
                    var entity = _mapper.Map<Device>(item);
                    return entity;
                }).ToList();
            }
        }

        public async Task<Device> GetDeviceAsync(int id, bool includeUser)
        {
            using (var context = _contextFactory.GetProjectContext())
            {
                var device = await context.Devices.FirstOrDefaultAsync(_ => _.Id == id);

                if (includeUser)
                {
                    device.User = await context.Users.FirstOrDefaultAsync(user => user.Id == device.UserId);
                }

                return _mapper.Map<Device>(device);
            }
        }

        public async Task DeleteDeviceAsync(int id)
        {
            using (var context = _contextFactory.GetProjectContext())
            {
                var device = await context
                    .Devices
                    .FirstOrDefaultAsync(_ => _.Id.Equals(id));

                if (device == null) return;

                await Task.Run(() => context.Devices.Remove(device));

                context.SaveChanges();
            }
        }

        public async Task SaveDeviceAsync(int? id, Device device)
        {
            if (device == null) return;

            using (var context = _contextFactory.GetProjectContext())
            {
                I.Device chooseDevice = new I.Device();

                if (id == null)
                {
                    chooseDevice = await context
                        .Devices
                        .FirstOrDefaultAsync(_ => _.Id.Equals(id));
                    _mapper.Map(device, chooseDevice);
                }
                else
                {
                    _mapper.Map(device, chooseDevice);
                    await context.Devices.AddAsync(chooseDevice);
                }

                context.SaveChanges();
            }
        }
    }
}
