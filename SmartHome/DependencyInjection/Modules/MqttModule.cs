using Microsoft.AspNetCore.Builder;
using MqttBroker.Configuration;
using MQTTnet.Client.Receiving;
using NServiceBus;
using System;
using System.Collections.Generic;
using System.Text;

namespace DependencyInjection.Modules
{
    public static class MqttModule
    {
        public static void Register(IApplicationBuilder app, IEndpointInstance endpoint, IMqttApplicationMessageReceivedHandler handler)
        {
            MqttServerHandlerConfiguration.Configure(app, endpoint, handler);
        }
    }
}
