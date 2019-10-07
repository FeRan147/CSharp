using Microsoft.AspNetCore.Builder;
using MqttBroker.Configuration;
using System;
using System.Collections.Generic;
using System.Text;

namespace DependencyInjection.Modules
{
    public static class MqttModule
    {
        public static void Register(IApplicationBuilder app)
        {
            MqttServerHandlerConfiguration.Configure(app);
        }
    }
}
