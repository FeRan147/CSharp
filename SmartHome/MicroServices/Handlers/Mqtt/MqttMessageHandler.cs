using DomainInterfaces.Interfaces;
using DomainInterfaces.Models;
using InfrastructureInterfaces.Interfaces;
using MicroServices.Messages.Devices;
using MicroServices.Messages.Mqtt;
using Microsoft.Extensions.Configuration;
using MQTTnet;
using NServiceBus;
using NServiceBus.Logging;
using System;
using System.Collections.Generic;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace MicroServices.Handlers.Devices.Mqtt
{
    public class MqttMessageHandler : IHandleMessages<MqttMessage>
    {
        private readonly IDeviceService _deviceService;
 
        public MqttMessageHandler(IDeviceService deviceService)
        {
            _deviceService = deviceService;
        }

        public Task Handle(MqttMessage message, IMessageHandlerContext context)
        {
            var device = Task.Run(async () => await _deviceService.GetByNameAsync(message.ClientId)).Result;
            if (device == null)
            {
                var addDevice = new Device()
                {
                    Name = message.ClientId,
                    Availibility = true
                };

                _deviceService.SaveAsync(null, addDevice);
            }

            return Task.CompletedTask;
        }
    }
}
