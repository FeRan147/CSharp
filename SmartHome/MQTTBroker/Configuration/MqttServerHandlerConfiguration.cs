using Microsoft.AspNetCore.Builder;
using MqttBroker.Handlers;
using MQTTnet.AspNetCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace MqttBroker.Configuration
{
    public static class MqttServerHandlerConfiguration
    {
        public static void Configure(IApplicationBuilder app)
        {
            app.UseMqttServer(server =>
            {
                server.ApplicationMessageReceivedHandler = new MessageHandler();
            });
        }
    }
}
