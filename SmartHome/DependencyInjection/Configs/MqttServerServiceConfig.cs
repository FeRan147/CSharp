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

namespace DependencyInjection.Configs
{
    public class MqttServerServiceConfig
    {
        private IServiceCollection _services;
        private IConfiguration _configuration;
        private readonly ILogger _logger;

        public MqttServerServiceConfig(IServiceCollection services, IConfiguration configuration, ILogger logger)
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

            MqttNetGlobalLogger.LogMessagePublished += (s, e) =>
            {
                var trace = $"[MQTT --> {e.TraceMessage.Timestamp:O}] [{e.TraceMessage.ThreadId}] [{e.TraceMessage.Source}] [{e.TraceMessage.Level}]: {e.TraceMessage.Message}";
                if (e.TraceMessage.Exception != null)
                {
                    trace += e.TraceMessage.Exception.ToString();
                }

                _logger.LogInformation(trace);
            };
        }
    }
}
