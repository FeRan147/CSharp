﻿using MicroServices.Messages.Mqtt;
using Microsoft.Extensions.Configuration;
using MqttBroker.Storage;
using MQTTnet;
using MQTTnet.Client.Receiving;
using MQTTnet.Server;
using NServiceBus;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace MqttBroker.Handlers
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
            if (eventArgs.ClientId != _configuration.GetSection("MQTT").GetSection("ServerClientId").Value)
            {
                var message = new MqttMessage()
                {
                    ClientId = eventArgs.ClientId,
                    Message = eventArgs.ApplicationMessage
                };

                var response = await _endpoint.Request<Task>(message).ConfigureAwait(false);

                await JsonMessagesStorage.SaveRetainedMessageAsync(eventArgs.ApplicationMessage);
            }
        }
    }
}
