using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Project.Domain.Interfaces;
using Project.WebApi.Models;
using D = Project.Domain.Models;

namespace Project.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DevicesController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IDeviceService _deviceService;

        public DevicesController(IMapper mapper, IDeviceService deviceService)
        {
            _mapper = mapper;
            _deviceService = deviceService;
        }

        [HttpGet("{includeUser}")]
        public async Task<IEnumerable<Device>> GetAsync(bool includeUser, CancellationToken cancellationToken)
        {
            var devices = await _deviceService.GetDevicesAsync(includeUser);

            return devices.Select(item =>
            {
                var entity = _mapper.Map<Device>(item);
                return entity;
            }).ToList();
        }

        [HttpGet("{id}/{includeUser}")]
        public async Task<Device> GetAsync(int id, bool includeUser)
        {
            var device = await _deviceService.GetDeviceAsync(id, includeUser);
            return _mapper.Map<Device>(device);
        }

        [HttpPost]
        public async Task PostAsync([FromBody] Device device)
        {
            await _deviceService.SaveDeviceAsync(null, _mapper.Map<D.Device>(device));
        }

        [HttpPut("{id}")]
        public async Task PutAsync(int id, [FromBody] Device device)
        {
            await _deviceService.SaveDeviceAsync(id, _mapper.Map<D.Device>(device));
        }

        [HttpDelete("{id}")]
        public async Task DeleteAsync(int id)
        {
            await _deviceService.DeleteDeviceAsync(id);
        }
    }
}
