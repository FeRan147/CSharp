using Microsoft.Extensions.Configuration;
using MqttClientEnactor.Interfaces;
using MqttClientEnactor.Messages;
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

namespace MqttClientEnactor.Handlers
{
    public class MqttResponseMessageHandler : IHandleMessages<MqttResponseMessage>
    {
        private readonly IMqttClientEnactor _mqttClient;
        private readonly IConfiguration _configuration;

        public MqttResponseMessageHandler(IMqttClientEnactor mqttClient, IConfiguration configuration)
        {
            _mqttClient = mqttClient;
            _configuration = configuration;
        }

        public async Task Handle(MqttResponseMessage message, IMessageHandlerContext context)
        {
            if(message.Message.UserProperties == null)
            {
                message.Message.UserProperties = new List<MqttUserProperty>();
            }

            message.Message.UserProperties.Add(new MqttUserProperty(_configuration.GetSection("MQTT").GetSection("ResponseName").Value, _configuration.GetSection("MQTT").GetSection("ResponseValue").Value));

            await _mqttClient.PublishAsync(message).ConfigureAwait(false);

            await context.Reply(HttpStatusCode.OK);
        }
    }
}
