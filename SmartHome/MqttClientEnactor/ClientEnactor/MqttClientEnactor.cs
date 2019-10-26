using Microsoft.Extensions.Configuration;
using MqttClientEnactor.Interfaces;
using MqttClientEnactor.Messages;
using MQTTnet;
using MQTTnet.Client;
using MQTTnet.Client.Disconnecting;
using MQTTnet.Client.Options;
using MQTTnet.Client.Receiving;
using MQTTnet.Protocol;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace MqttClientEnactor.ClientEnactor
{
    public class MqttClientEnactor : IMqttClientEnactor
    {
        private readonly IConfiguration _configuration;

        public MqttClientEnactor(IConfiguration configuration)
        {
            _configuration = configuration;

        }

        public void Dispose()
        {

        }

        public async Task PublishAsync(MqttResponseMessage message)
        {
            var options = new MqttClientOptionsBuilder()
                                .WithTcpServer(_configuration.GetSection("MQTT").GetSection("IP").Value, int.Parse(_configuration.GetSection("MQTT").GetSection("Port").Value))
                                .Build();

            var client = new MqttFactory().CreateMqttClient();

            await client.ConnectAsync(options);
            await client.PublishAsync(message.Message.Topic, Encoding.UTF8.GetString(message.Message.Payload), MqttQualityOfServiceLevel.AtMostOnce);
            await client.DisconnectAsync();
        }
    }
}
