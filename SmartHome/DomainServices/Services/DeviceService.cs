using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using DomainInterfaces.Interfaces;
using DomainInterfaces.Models;
using InfrastructureInterfaces.Interfaces;
using Microsoft.EntityFrameworkCore;
using I = InfrastructureInterfaces.Models;

namespace DomainServices.Services
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

        public async Task<IList<Device>> GetAllAsync()
        {
            using (var context = _contextFactory.GetDefaultContext())
            {
                var devicesQuery = context.Devices.AsQueryable();

                var devices = await devicesQuery
                                    .ToListAsync()
                                    .ConfigureAwait(false);

                return devices.Select(item =>
                {
                    var entity = _mapper.Map<Device>(item);
                    return entity;
                }).ToList();
            }
        }

        public async Task<Device> GetAsync(int id)
        {
            using (var context = _contextFactory.GetDefaultContext())
            {
                var device = await context.Devices.FirstOrDefaultAsync(_ => _.Id == id);

                return _mapper.Map<Device>(device);
            }
        }

        public async Task<Device> GetByNameAsync(string name)
        {
            using (var context = _contextFactory.GetDefaultContext())
            {
                var device = await context.Devices.FirstOrDefaultAsync(_ => _.Name == name);

                return _mapper.Map<Device>(device);
            }
        }

        public async Task DeleteAsync(int id)
        {
            using (var context = _contextFactory.GetDefaultContext())
            {
                var device = await context
                                .Devices
                                .FirstOrDefaultAsync(_ => _.Id.Equals(id))
                                .ConfigureAwait(false);

                if (device == null) return;

                await Task.Run(() => context
                                        .Devices
                                        .Remove(device))
                                        .ConfigureAwait(false);

                context.SaveChanges();
            }
        }

        public async Task SaveAsync(int? id, Device device)
        {
            if (device == null) return;

            using (var context = _contextFactory.GetDefaultContext())
            {
                I.Device chooseDevice = new I.Device();

                if (id != null)
                {
                    chooseDevice = await context
                        .Devices
                        .FirstOrDefaultAsync(_ => _.Id.Equals(id))
                        .ConfigureAwait(false);
                    _mapper.Map(device, chooseDevice);
                }
                else
                {
                    _mapper.Map(device, chooseDevice);
                    await context
                        .Devices
                        .AddAsync(chooseDevice)
                        .ConfigureAwait(false);
                }

                context.SaveChanges();
            }
        }

        public async Task<IList<Device>> GetPagedAsync(int currentPage, int onPage)
        {
            using (var context = _contextFactory.GetDefaultContext())
            {
                var offset = (currentPage - 1) * onPage;

                var devices = await context
                                .Devices
                                .Skip(offset)
                                .Take(onPage)
                                .ToListAsync()
                                .ConfigureAwait(false);

                return devices.Select(item =>
                {
                    var entity = _mapper.Map<Device>(item);
                    return entity;
                }).ToList();
            }
        }

        public void Dispose()
        {
        }
    }
}
