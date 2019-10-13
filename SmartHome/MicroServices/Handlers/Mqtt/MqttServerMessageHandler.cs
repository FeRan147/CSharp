using DomainInterfaces.Interfaces;
using MicroServices.Configuration;
using MicroServices.Messages.Mqtt;
using Microsoft.AspNetCore.Builder;
using MQTTnet.AspNetCore;
using MQTTnet.Server;
using NServiceBus;
using System;
using System.Collections.Generic;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace MicroServices.Handlers.Mqtt
{
    public class MqttServerMessageHandler : IHandleMessages<MqttServerMessage>
    {
        public Task Handle(MqttServerMessage message, IMessageHandlerContext context)
        {
            var app = AppConfiguration.GetApp();

            if (app != null)
            {
                app.UseMqttServer(server =>
                {
                    server.PublishAsync(message.Message);
                });
            }

            return context.Reply(HttpStatusCode.OK);
        }
    }
}
