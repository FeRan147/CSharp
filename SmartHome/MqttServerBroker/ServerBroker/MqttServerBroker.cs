using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using MQTTnet;
using MQTTnet.Client.Receiving;
using MQTTnet.Diagnostics;
using MQTTnet.Server;
using MqttServerBroker.Logging;
using MqttServerBrokerInterfaces.Interfaces;
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
        private MqttFactory _mqttFactory;
        private readonly IConfiguration _configuration;
        private readonly IMqttApplicationMessageReceivedHandler _messageReceivedHandler;
        private readonly IMqttServerClientConnectedHandler _clientConnectedHandler;
        private readonly IMqttServerClientDisconnectedHandler _clientDisconnectedHandler;
        private readonly ILogger<MqttServer> _logger;

        public MqttServerBroker(IMqttApplicationMessageReceivedHandler messageReceivedHandler,
            IMqttServerClientConnectedHandler clientConnectedHandler,
            IMqttServerClientDisconnectedHandler clientDisconnectedHandler,
            IConfiguration configuration,
            ILogger<MqttServer> logger)
        {
            _messageReceivedHandler = messageReceivedHandler;
            _clientConnectedHandler = clientConnectedHandler;
            _clientDisconnectedHandler = clientDisconnectedHandler;
            _configuration = configuration;
            _logger = logger;
        }

        public void Dispose()
        {

        }

        public async Task RunAsync()
        {
            if (bool.Parse(_configuration.GetSection("MQTT").GetSection("EnableDebugLogging").Value))
            {
                var mqttNetLogger = new MqttNetLoggerWrapper(_logger);
                _mqttFactory = new MqttFactory(mqttNetLogger);

                _logger.LogWarning("Debug logging is enabled. Performance of MQTTnet Server is decreased!");
            }
            else
            {
                _mqttFactory = new MqttFactory();
            }

            var server = _mqttFactory.CreateMqttServer();

            var serverOptions = new MqttServerOptionsBuilder()
                .WithDefaultEndpointBoundIPAddress(IPAddress.Parse(_configuration.GetSection("MQTT").GetSection("IP").Value))
                .WithDefaultEndpointBoundIPV6Address(IPAddress.None)
                .WithDefaultEndpointPort(int.Parse(_configuration.GetSection("MQTT").GetSection("Port").Value))
                .Build();

            server.ApplicationMessageReceivedHandler = _messageReceivedHandler;
            server.ClientConnectedHandler = _clientConnectedHandler;
            server.ClientDisconnectedHandler = _clientDisconnectedHandler;

            await server.StartAsync(serverOptions);
        }
    }
}
