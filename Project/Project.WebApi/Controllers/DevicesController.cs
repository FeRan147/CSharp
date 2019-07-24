using System;
using System.Collections.Generic;
using System.Linq;
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

        [HttpGet]
        public ActionResult<IEnumerable<Device>> Get()
        {
            var devices = _deviceService.GetDevices();

            return devices.Select(item =>
            {
                var entity = _mapper.Map<Device>(item);
                return entity;
            }).ToList();
        }

        [HttpGet("{id}")]
        public ActionResult<Device> Get(int id)
        {
            var device = _deviceService.GetDevice(id);
            return _mapper.Map<Device>(device);
        }

        [HttpPost]
        public void Post([FromBody] Device device)
        {
            _deviceService.AddDevice(_mapper.Map<D.Device>(device));
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Device device)
        {
            _deviceService.UpdateDevice(id, _mapper.Map<D.Device>(device));
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _deviceService.DeleteDevice(id);
        }
    }
}
