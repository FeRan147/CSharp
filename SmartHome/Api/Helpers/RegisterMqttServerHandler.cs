using DependencyInjection.Modules;
using Microsoft.AspNetCore.Builder;
using MQTTnet.Client.Receiving;
using NServiceBus;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Helpers
{
    public static class RegisterMqttServerHandler
    {
        public static void Register(IApplicationBuilder app, IEndpointInstance endpoint, IMqttApplicationMessageReceivedHandler handler)
        {
            MqttModule.Register(app, endpoint, handler);
        }
    }
}
