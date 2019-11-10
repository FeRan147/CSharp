using MicroServices.Messages;
using Microsoft.Extensions.Configuration;
using MQTTnet.Server;
using NServiceBus;
using System;
using System.Collections.Generic;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace MqttServerBroker.Handlers
{
    public class ClientDisconnectedHandler : IMqttServerClientDisconnectedHandler
    {
        private readonly IEndpointInstance _endpoint;
        private readonly IConfiguration _configuration;

        public ClientDisconnectedHandler(IEndpointInstance endpoint, IConfiguration configuration)
        {
            _endpoint = endpoint;
            _configuration = configuration;
        }

        public async Task HandleClientDisconnectedAsync(MqttServerClientDisconnectedEventArgs eventArgs)
        {
            var message = new MqttDisconnectMessage()
            {
                ClientId = eventArgs.ClientId,
            };

            if (string.Equals(message.ClientId, _configuration.GetSection("MQTT").GetSection("MqttClientEnactorName").Value) == false)
            {
                await _endpoint.Request<HttpStatusCode>(message).ConfigureAwait(false);
            }
        }
    }
}
