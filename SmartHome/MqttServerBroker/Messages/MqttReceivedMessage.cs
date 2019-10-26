using MQTTnet;
using NServiceBus;
using System;
using System.Collections.Generic;
using System.Text;

namespace MqttServerBroker.Messages
{
    public class MqttReceivedMessage : IMessage
    {
        public string ClientId { get; set; }
        public MqttApplicationMessage Message { get; set; }
    }
}
