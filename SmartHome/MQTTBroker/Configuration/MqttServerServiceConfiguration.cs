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
using MQTTBroker.Logger;
using DomainInterfaces.Models;
using MQTTBroker.Storage;

namespace MQTTBroker.Configuration
{
    public static class MqttServerServiceConfiguration
    {
        public static void Configure(IServiceCollection services, IConfiguration configuration)
        {
            MQTTConsoleLogger.ForwardToConsole();

            var storage = new JsonServerStorage();

            var mqttServerOptions = new MqttServerOptionsBuilder()
                .WithDefaultEndpointBoundIPAddress(IPAddress.Parse(configuration.GetSection("MQTT").GetSection("IP").Value))
                .WithDefaultEndpointPort(int.Parse(configuration.GetSection("MQTT").GetSection("Port").Value))
                .WithStorage(storage)
                .WithSubscriptionInterceptor(c => {
                    c.AcceptSubscription = true;
                })
                .WithApplicationMessageInterceptor(c => {
                    c.AcceptPublish = true;
                })
                .Build();

            services
                .AddHostedMqttServer(mqttServerOptions)
                .AddMqttTcpServerAdapter()
                .AddMqttConnectionHandler()
                .AddMqttWebSocketServerAdapter()
                .AddConnections();
        }
    }
}
