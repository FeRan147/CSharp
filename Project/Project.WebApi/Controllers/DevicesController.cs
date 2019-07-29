using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
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
    public class DevicesController : ControllerBase, IBaseController<Device>
    {
        private readonly IMapper _mapper;
        private readonly IDeviceService _deviceService;

        public DevicesController(IMapper mapper, IDeviceService deviceService)
        {
            _mapper = mapper;
            _deviceService = deviceService;
        }

        [HttpGet("{includeUser:bool}")]
        public async Task<IEnumerable<Device>> GetAllAsync(bool includeUser)
        {
            var devices = await _deviceService.GetAllAsync(includeUser);

            return devices.Select(item =>
                {
                    var entity = _mapper.Map<Device>(item);
                    return entity;
                }).ToList();
        }

        [HttpGet("{id:int}/{includeUser:bool}")]
        public async Task<Device> GetAsync(int id, bool includeUser)
        {
            var device = await _deviceService.GetAsync(id, includeUser);
            return _mapper.Map<Device>(device);
        }

        [HttpGet("{currentPage:int}/{onPage:int}")]
        public async Task<IList<Device>> GetPagedAsync(int currentPage, int onPage)
        {
            var pagedDevices = await _deviceService.GetPagedAsync(currentPage, onPage);
            return pagedDevices.Select(item =>
            {
                var entity = _mapper.Map<Device>(item);
                return entity;
            }).ToList();
        }

        [HttpPost]
        public async Task PostAsync([FromBody] Device device)
        {
            await _deviceService.SaveAsync(null, _mapper.Map<D.Device>(device));
        }

        [HttpPut("{id:int}")]
        public async Task PutAsync(int id, [FromBody] Device device)
        {
            await _deviceService.SaveAsync(id, _mapper.Map<D.Device>(device));
        }

        [HttpDelete("{id:int}")]
        public async Task DeleteAsync(int id)
        {
            await _deviceService.DeleteAsync(id);
        }
    }
}
