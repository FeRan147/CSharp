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
using MQTTnet;
using System.Text;
using Microsoft.Extensions.Logging;
using MicroServices.Messages;

namespace Api.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class DevicesController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IDeviceService _deviceService;
        private readonly ILogger _logger;
        private readonly IEndpointInstance _endpoint;

        public DevicesController(IMapper mapper, IDeviceService deviceService, ILogger<DevicesController> logger, IEndpointInstance endpoint)
        {
            _mapper = mapper;
            _deviceService = deviceService;
            _logger = logger;
            _endpoint = endpoint;
        }

        [HttpGet]
        public async Task<IList<DeviceViewModel>> GetAllAsync()
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

        [AllowAnonymous]
        [HttpPost]
        [Route("[action]")]
        public async Task<IActionResult> SetLightOnAsync()
        {
            var message = new MqttResponseMessage()
            {
                ClientId = Guid.NewGuid().ToString(),
                Message = new MqttApplicationMessage()
                {
                    Topic = "test/output",
                    Payload = Encoding.UTF8.GetBytes("on"),
                }
            };

            var response = await _endpoint.Request<HttpStatusCode>(message)
                .ConfigureAwait(false);

            return StatusCode((int)response);
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("[action]")]
        public async Task<IActionResult> SetLightOffAsync()
        {
            var message = new MqttResponseMessage()
            {
                ClientId = Guid.NewGuid().ToString(),
                Message = new MqttApplicationMessage()
                {
                    Topic = "test/output",
                    Payload = Encoding.UTF8.GetBytes("off")
                }
            };

            var response = await _endpoint.Request<HttpStatusCode>(message)
                .ConfigureAwait(false);

            return StatusCode((int)response);
        }
    }
}
