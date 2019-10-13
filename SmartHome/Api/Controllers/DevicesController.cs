using Api.Interfaces;
using Api.Models;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DomainInterfaces.Interfaces;
using D = DomainInterfaces.Models;
using NServiceBus;
using System.Net;
using MicroServices.Messages.Devices;
using MicroServices.Messages.Mqtt;
using Microsoft.Extensions.Configuration;
using MQTTnet;
using System.Text;

namespace Api.Controllers
{
    //[Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class DevicesController : ControllerBase, IBaseController<DeviceViewModel>
    {
        private readonly IMapper _mapper;
        private readonly IDeviceService _deviceService;
        private readonly IEndpointInstance _endpoint;
        private readonly IConfiguration _configuration;

        public DevicesController(IMapper mapper, IDeviceService deviceService, IEndpointInstance endpoint, IConfiguration configuration)
        {
            _mapper = mapper;
            _deviceService = deviceService;
            _endpoint = endpoint;
            _configuration = configuration;
        }

        [HttpGet]
        public async Task<IEnumerable<DeviceViewModel>> GetAllAsync()
        {
            var devices = await _deviceService.GetAllAsync();

            return devices.Select(item =>
            {
                var entity = _mapper.Map<DeviceViewModel>(item);
                return entity;
            }).ToList();
        }

        [HttpGet("{id:int}")]
        public async Task<DeviceViewModel> GetAsync(int id)
        {
            var device = await _deviceService.GetAsync(id);
            return _mapper.Map<DeviceViewModel>(device);
        }

        [HttpGet("{currentPage:int}/{onPage:int}")]
        public async Task<IList<DeviceViewModel>> GetPagedAsync(int currentPage, int onPage)
        {
            var pagedDevices = await _deviceService.GetPagedAsync(currentPage, onPage);
            return pagedDevices.Select(item =>
            {
                var entity = _mapper.Map<DeviceViewModel>(item);
                return entity;
            }).ToList();
        }

        [HttpPost]
        public async Task PostAsync([FromBody] DeviceViewModel device)
        {
            var message = new AddDevice()
            {
                Device = _mapper.Map<D.Device>(device)
            };

            var response = await _endpoint.Request<HttpStatusCode>(message)
                .ConfigureAwait(false);
        }

        [HttpPut("{id:int}")]
        public async Task PutAsync(int id, [FromBody] DeviceViewModel device)
        {
            var message = new UpdateDevice()
            {
                Id = id,
                Device = _mapper.Map<D.Device>(device)
            };

            var response = await _endpoint.Request<HttpStatusCode>(message)
                .ConfigureAwait(false);
        }

        [HttpDelete("{id:int}")]
        public async Task DeleteAsync(int id)
        {
            var message = new RemoveDevice()
            {
                Id = id
            };

            var response = await _endpoint.Request<HttpStatusCode>(message)
                .ConfigureAwait(false);
        }

        [HttpPost]
        [Route("api/[controller]/[action]")]
        public async Task SetLightOnAsync()
        {
            var message = new MqttServerMessage()
            {
                ClientId = _configuration.GetSection("MQTT").GetSection("ServerClientId").Value,
                Message = new MqttApplicationMessage()
                {
                    Topic = "test/output",
                    Payload = Encoding.UTF8.GetBytes("on")
                }
            };

            var response = await _endpoint.Request<HttpStatusCode>(message)
                .ConfigureAwait(false);
        }

        [HttpPost]
        [Route("api/[controller]/[action]")]
        public async Task SetLightOffAsync()
        {
            var message = new MqttServerMessage()
            {
                ClientId = _configuration.GetSection("MQTT").GetSection("ServerClientId").Value,
                Message = new MqttApplicationMessage()
                {
                    Topic = "test/output",
                    Payload = Encoding.UTF8.GetBytes("off")
                }
            };

            var response = await _endpoint.Request<HttpStatusCode>(message)
                .ConfigureAwait(false);
        }
    }
}
