using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using MQTTnet.Diagnostics;
using System;
using System.Collections.Generic;
using System.Text;

namespace BrokerMQTT.Configuration
{
    public class MqttLoggerConfiguration
    {
        private IServiceCollection _services;
        private IConfiguration _configuration;
        private readonly ILogger _logger;

        public MqttLoggerConfiguration(IServiceCollection services, IConfiguration configuration, ILogger logger)
        {
            _services = services;
            _configuration = configuration;
            _logger = logger;
        }

        public void Configure()
        {
            MqttNetGlobalLogger.LogMessagePublished += (s, e) =>
            {
                var trace = $"\tMQTT --> [{e.TraceMessage.Timestamp:O}] [{e.TraceMessage.ThreadId}] [{e.TraceMessage.Source}]\n\t[{e.TraceMessage.Level}]: {e.TraceMessage.Message}";
                if (e.TraceMessage.Exception != null)
                {
                    trace += $"\n\t{e.TraceMessage.Exception.ToString()}";
                    _logger.LogError(trace);
                }
                else
                {
                    _logger.LogInformation(trace);
                }
            };
        }
    }
}
