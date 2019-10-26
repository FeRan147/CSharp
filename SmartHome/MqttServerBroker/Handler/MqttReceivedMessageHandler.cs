using DomainInterfaces.Interfaces;
using DomainInterfaces.Models;
using InfrastructureInterfaces.Interfaces;
using MicroServices.Messages.Devices;
using Microsoft.Extensions.Configuration;
using MQTTnet;
using MqttServerBroker.Messages;
using NServiceBus;
using NServiceBus.Logging;
using System;
using System.Collections.Generic;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace MqttServerBroker.Handlers
{
    public class MqttReceivedMessageHandler : IHandleMessages<MqttReceivedMessage>
    {
        private readonly IDeviceService _deviceService;
 
        public MqttReceivedMessageHandler(IDeviceService deviceService)
        {
            _deviceService = deviceService;
        }

        public Task Handle(MqttReceivedMessage message, IMessageHandlerContext context)
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

            return context.Reply(HttpStatusCode.OK);
        }
    }
}
