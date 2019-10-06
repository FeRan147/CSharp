using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MQTTnet;
using MQTTnet.AspNetCore;
using MQTTnet.Protocol;
using MQTTnet.Server;
using System;
using System.Collections.Generic;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace DependencyInjection.Configs
{
    public class MqttServerServiceConfig
    {
        private IServiceCollection _services;
        private IConfiguration _configuration;

        public MqttServerServiceConfig(IServiceCollection services, IConfiguration configuration)
        {
            _services = services;
            _configuration = configuration;
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
