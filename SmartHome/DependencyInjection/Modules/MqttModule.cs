using DependencyInjection.Extensions;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MqttClientEnactor.Interfaces;
using MqttClient = MqttClientEnactor.ClientEnactor;
using MqttServerBroker.Interfaces;
using MqttServer = MqttServerBroker.ServerBroker;
using System;
using System.Collections.Generic;
using System.Text;
using MQTTnet.Client.Receiving;
using MqttServerBroker.Handlers;
using MqttClientEnactor.Handlers;
using MQTTnet.Client.Disconnecting;

namespace DependencyInjection.Modules
{
    public static class MqttModule
    {
        public static void Register(IServiceCollection services, IConfiguration configuration)
        {
            MqttConsoleLogger.ForwardToConsole();

            services.AddSingleton<IMqttApplicationMessageReceivedHandler, ApplicationMessageReceivedHandler>();
            services.AddSingleton<IMqttServerBroker, MqttServer.MqttServerBroker>();
            services.AddSingleton<IMqttClientEnactor, MqttClient.MqttClientEnactor>();
        }
    }
}
