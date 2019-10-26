using Microsoft.Extensions.Configuration;
using MQTTnet;
using MQTTnet.Client.Receiving;
using MQTTnet.Protocol;
using MQTTnet.Server;
using MqttServerBroker.Messages;
using NServiceBus;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace MqttServerBroker.Handlers
{
    public class ApplicationMessageReceivedHandler : IMqttApplicationMessageReceivedHandler
    {
        private readonly IEndpointInstance _endpoint;
        private readonly IConfiguration _configuration;

        public ApplicationMessageReceivedHandler(IEndpointInstance endpoint, IConfiguration configuration)
        {
            _endpoint = endpoint;
            _configuration = configuration;
        }

        public async Task HandleApplicationMessageReceivedAsync(MqttApplicationMessageReceivedEventArgs eventArgs)
        {
            var message = new MqttReceivedMessage()
            {
                ClientId = eventArgs.ClientId,
                Message = eventArgs.ApplicationMessage
            };

            //await _endpoint.Request<Task>(message).ConfigureAwait(false);
        }
    }
}
