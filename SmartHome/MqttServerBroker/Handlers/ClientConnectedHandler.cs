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
    public class ClientConnectedHandler : IMqttServerClientConnectedHandler
    {
        private readonly IEndpointInstance _endpoint;
        private readonly IConfiguration _configuration;

        public ClientConnectedHandler(IEndpointInstance endpoint, IConfiguration configuration)
        {
            _endpoint = endpoint;
            _configuration = configuration;
        }

        public async Task HandleClientConnectedAsync(MqttServerClientConnectedEventArgs eventArgs)
        {
            var message = new MqttConnectMessage()
            {
                ClientId = eventArgs.ClientId
            };

            if (string.Equals(message.ClientId, _configuration.GetSection("MQTT").GetSection("MqttClientEnactorName").Value) == false)
            {
                await _endpoint.Request<HttpStatusCode>(message).ConfigureAwait(false);
            }
        }
    }
}
