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
using MqttBroker.Logger;
using DomainInterfaces.Models;
using MqttBroker.Storage;

namespace MqttBroker.Configuration
{
    public static class MqttServerServiceConfiguration
    {
        public static void Configure(IServiceCollection services, IConfiguration configuration)
        {
            MqttConsoleLogger.ForwardToConsole();

            var mqttServerOptions = new MqttServerOptionsBuilder()
                .WithDefaultEndpointBoundIPAddress(IPAddress.Parse(configuration.GetSection("MQTT").GetSection("IP").Value))
                .WithDefaultEndpointPort(int.Parse(configuration.GetSection("MQTT").GetSection("Port").Value))
                .Build();

            services
                .AddHostedMqttServer(mqttServerOptions)
                .AddMqttTcpServerAdapter()
                .AddMqttConnectionHandler()
                .AddConnections();
        }
    }
}
