using Microsoft.Extensions.Configuration;
using MQTTnet;
using MQTTnet.Client.Receiving;
using MQTTnet.Server;
using MqttServerBroker.Interfaces;
using System;
using System.Collections.Generic;
using System.Net;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace MqttServerBroker.ServerBroker
{
    public class MqttServerBroker : IMqttServerBroker
    {
        private readonly IConfiguration _configuration;
        private readonly IMqttApplicationMessageReceivedHandler _handler;

        public MqttServerBroker(IMqttApplicationMessageReceivedHandler handler, IConfiguration configuration)
        {
            _handler = handler;
            _configuration = configuration;
        }

        public void Dispose()
        {

        }

        public async Task RunAsync()
        {
            var factory = new MqttFactory();
            var server = factory.CreateMqttServer();

            var serverOptions = new MqttServerOptionsBuilder()
                .WithDefaultEndpointBoundIPAddress(IPAddress.Parse(_configuration.GetSection("MQTT").GetSection("IP").Value))
                .WithDefaultEndpointBoundIPV6Address(IPAddress.None)
                .WithDefaultEndpointPort(int.Parse(_configuration.GetSection("MQTT").GetSection("Port").Value))
                .Build();

            server.ApplicationMessageReceivedHandler = _handler;

            await server.StartAsync(serverOptions);
        }
    }
}
