using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MqttClientEnactor.Interfaces;
using MqttClient = MqttClientEnactor.ClientEnactor;
using MqttServer = MqttServerBroker.ServerBroker;
using System;
using System.Collections.Generic;
using System.Text;
using MQTTnet.Client.Receiving;
using MqttServerBroker.Handlers;
using MQTTnet.Client.Disconnecting;
using MqttServerBrokerInterfaces.Interfaces;
using MQTTnet.Server;

namespace DependencyInjection.Modules
{
    public static class MqttModule
    {
        public static void MqttModuleRegister(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddSingleton<IMqttServerClientConnectedHandler, ClientConnectedHandler>();
            services.AddSingleton<IMqttServerClientDisconnectedHandler, ClientDisconnectedHandler>();
            services.AddSingleton<IMqttApplicationMessageReceivedHandler, ApplicationMessageReceivedHandler>();
            services.AddSingleton<IMqttServerBroker, MqttServer.MqttServerBroker>();
            services.AddSingleton<IMqttClientEnactor, MqttClient.MqttClientEnactor>();
        }
    }
}
