using DomainInterfaces.Interfaces;
using DomainInterfaces.Models;
using MicroServices.Messages;
using NServiceBus;
using System;
using System.Collections.Generic;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace MicroServices.Handlers
{
    public class MqttConnectMessageHandler : IHandleMessages<MqttConnectMessage>
    {
        private readonly IDeviceService _deviceService;

        public MqttConnectMessageHandler(IDeviceService deviceService)
        {
            _deviceService = deviceService;
        }

        public Task Handle(MqttConnectMessage message, IMessageHandlerContext context)
        {
            var device = new Device
            {
                Name = message.ClientId
            };

            Task.Run(async () => await _deviceService.ConnectDeviceAsync(device).ConfigureAwait(false));

            return context.Reply(HttpStatusCode.OK);
        }
    }
}
