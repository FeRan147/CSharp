using AutoMapper;
using Project.Domain.Interfaces;
using Project.Domain.Models;
using Project.Infrastructure.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using I = Project.Infrastructure.Models;

namespace Project.DomainServices.Services
{
    public class DeviceFakeService: IDeviceFakeService
    {
        private readonly IMapper _mapper;
        private readonly IContextFactory _contextFactory;

        public DeviceFakeService(IMapper mapper, IContextFactory contextFactory)
        {
            _mapper = mapper;
            _contextFactory = contextFactory;
        }

        public IList<Device> GetAll(bool includeUser)
        {
            using (var context = _contextFactory.GetFakeProjectContext())
            {
                var devices = context.GetDevices(includeUser);

                return devices.Select(item =>
                {
                    var entity = _mapper.Map<Device>(item);
                    return entity;
                }).ToList();
            }
        }

        public Device Get(int id, bool includeUser)
        {
            using (var context = _contextFactory.GetFakeProjectContext())
            {
                var device = context.GetDevice(id, includeUser);
                return _mapper.Map<Device>(device);
            }
        }

        public void Delete(int id)
        {
            using (var context = _contextFactory.GetFakeProjectContext())
            {
                context.DeleteDevice(id);
            }
        }

        public void Add(Device device)
        {
            using (var context = _contextFactory.GetFakeProjectContext())
            {
                context.AddDevice(_mapper.Map<I.Device>(device));
            }
        }

        public void Update(int id, Device device)
        {
            using (var context = _contextFactory.GetFakeProjectContext())
            {
                context.UpdateDevice(id, _mapper.Map<I.Device>(device));
            }
        }

        public IList<Device> GetPaged(int currentPage, int onPage)
        {
            using (var context = _contextFactory.GetFakeProjectContext())
            {
                var offset = (currentPage - 1) * onPage;

                var devices = context
                    .GetPagedDevices(currentPage, onPage).Select(item =>
                    {
                        var entity = _mapper.Map<Device>(item);
                        return entity;
                    }).ToList();

                return devices;
            }
        }

        public void Dispose()
        {
        }
    }
}
