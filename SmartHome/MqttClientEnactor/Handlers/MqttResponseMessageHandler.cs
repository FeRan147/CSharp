using Microsoft.Extensions.Configuration;
using MqttClientEnactor.Interfaces;
using MqttClientEnactor.Messages;
using MQTTnet;
using MQTTnet.Client;
using MQTTnet.Client.Options;
using MQTTnet.Protocol;
using MQTTnet.Server;
using NServiceBus;
using System;
using System.Collections.Generic;
using System.Net;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace MqttClientEnactor.Handlers
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
            await _mqttClient.PublishAsync(message).ConfigureAwait(false);

            await context.Reply(HttpStatusCode.OK);
        }
    }
}
