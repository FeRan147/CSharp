using MicroServices.Messages;
using Microsoft.Extensions.Configuration;
using MqttClientEnactor.Interfaces;
using MQTTnet;
using MQTTnet.Client;
using MQTTnet.Client.Options;
using MQTTnet.Packets;
using MQTTnet.Protocol;
using MQTTnet.Server;
using NServiceBus;
using System;
using System.Collections.Generic;
using System.Net;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace MicroServices.Handlers
{
    public class MqttResponseMessageHandler : IHandleMessages<MqttResponseMessage>
    {
        private readonly IMqttClientEnactor _mqttClient;

        public MqttResponseMessageHandler(IMqttClientEnactor mqttClient)
        {
            _mqttClient = mqttClient;
        }

        public async Task Handle(MqttResponseMessage message, IMessageHandlerContext context)
        {
            await _mqttClient.PublishAsync(message.Message).ConfigureAwait(false);

            await context.Reply(HttpStatusCode.OK);
        }
    }
}
