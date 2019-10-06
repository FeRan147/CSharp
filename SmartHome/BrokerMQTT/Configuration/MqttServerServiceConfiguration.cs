using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using MQTTnet;
using MQTTnet.AspNetCore;
using MQTTnet.Diagnostics;
using MQTTnet.Protocol;
using MQTTnet.Server;
using System;
using System.Collections.Generic;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace BrokerMQTT.Configuration
{
    public class MqttServerServiceConfiguration
    {
        private IServiceCollection _services;
        private IConfiguration _configuration;
        private readonly ILogger _logger;

        public MqttServerServiceConfiguration(IServiceCollection services, IConfiguration configuration, ILogger logger)
        {
            _services = services;
            _configuration = configuration;
            _logger = logger;
        }

        public void Configure()
        {
            var mqttServerOptions = new MqttServerOptionsBuilder()
                .WithDefaultEndpointBoundIPAddress(IPAddress.Parse(_configuration.GetSection("MQTT").GetSection("IP").Value))
                .WithDefaultEndpointPort(int.Parse(_configuration.GetSection("MQTT").GetSection("Port").Value))
                .Build();

            _services
                .AddHostedMqttServer(mqttServerOptions)
                .AddMqttConnectionHandler()
                .AddMqttWebSocketServerAdapter()
                .AddConnections();
        }
    }
}
