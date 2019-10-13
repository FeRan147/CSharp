using Microsoft.AspNetCore.Builder;
using MqttBroker.Handlers;
using MQTTnet.AspNetCore;
using MQTTnet.Client.Receiving;
using NServiceBus;
using System;
using System.Collections.Generic;
using System.Text;

namespace MqttBroker.Configuration
{
    public static class MqttServerHandlerConfiguration
    {
        public static void Configure(IApplicationBuilder app, IEndpointInstance endpoint, IMqttApplicationMessageReceivedHandler handler)
        {
            app.UseMqttServer(server =>
            {
                server.ApplicationMessageReceivedHandler = handler;
            });
        }
    }
}
