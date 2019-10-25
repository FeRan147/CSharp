using DomainInterfaces.Interfaces;
using MicroServices.Configuration;
using MicroServices.Messages.Mqtt;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using MQTTnet;
using MQTTnet.AspNetCore;
using MQTTnet.Client;
using MQTTnet.Client.Options;
using MQTTnet.Extensions.Rpc;
using MQTTnet.Extensions.Rpc.Options;
using MQTTnet.Protocol;
using MQTTnet.Server;
using NServiceBus;
using System;
using System.Collections.Generic;
using System.Net;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace MicroServices.Handlers.Mqtt
{
    public class MqttServerMessageHandler : IHandleMessages<MqttServerMessage>
    {
        private readonly IConfiguration _configuration;

        public MqttServerMessageHandler(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task Handle(MqttServerMessage message, IMessageHandlerContext context)
        {
            using (var mqttClient = new MqttFactory().CreateMqttClient())
            {
                var options = new MqttClientOptionsBuilder()
                                    .WithClientId(message.ClientId)
                                    .WithTcpServer(_configuration.GetSection("MQTT").GetSection("IP").Value, int.Parse(_configuration.GetSection("MQTT").GetSection("Port").Value))
                                    .Build();

                await mqttClient.ConnectAsync(options);
                await mqttClient.PublishAsync(message.Message.Topic, Encoding.UTF8.GetString(message.Message.Payload), MqttQualityOfServiceLevel.AtMostOnce);
                await mqttClient.DisconnectAsync();
            }

            await context.Reply(HttpStatusCode.OK);
        }
    }
}
