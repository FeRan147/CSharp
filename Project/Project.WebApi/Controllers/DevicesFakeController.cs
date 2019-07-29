using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Project.Domain.Interfaces;
using Project.WebApi.Interfaces;
using Project.WebApi.Models;
using D = Project.Domain.Models;

namespace Project.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DevicesFakeController : ControllerBase, IBaseFakeController<Device>
    {
        private readonly IMapper _mapper;
        private readonly IDeviceFakeService _deviceFakeService;

        public DevicesFakeController(IMapper mapper, IDeviceFakeService deviceFakeService)
        {
            _mapper = mapper;
            _deviceFakeService = deviceFakeService;
        }

        [HttpGet("{includeUser:bool}")]
        public IEnumerable<Device> GetAll(bool includeUser)
        {
            var devices = _deviceFakeService.GetAll(includeUser);

            return devices.Select(item =>
                {
                    var entity = _mapper.Map<Device>(item);
                    return entity;
                }).ToList();
        }

        [HttpGet("{id:int}/{includeUser:bool}")]
        public Device Get(int id, bool includeUser)
        {
            var device = _deviceFakeService.Get(id, includeUser);
            return _mapper.Map<Device>(device);
        }

        [HttpGet("{currentPage:int}/{onPage:int}")]
        public IList<Device> GetPaged(int currentPage, int onPage)
        {
            var pagedDevices = _deviceFakeService.GetPaged(currentPage, onPage);
            return pagedDevices.Select(item =>
            {
                var entity = _mapper.Map<Device>(item);
                return entity;
            }).ToList();
        }

        [HttpPost]
        public void Post([FromBody] Device device)
        {
            _deviceFakeService.Add(_mapper.Map<D.Device>(device));
        }

        [HttpPut("{id:int}")]
        public void Put(int id, [FromBody] Device device)
        {
            _deviceFakeService.Update(id, _mapper.Map<D.Device>(device));
        }

        [HttpDelete("{id:int}")]
        public void Delete(int id)
        {
            _deviceFakeService.Delete(id);
        }
    }
}
