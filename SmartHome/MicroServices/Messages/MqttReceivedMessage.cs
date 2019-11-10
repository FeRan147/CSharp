using MQTTnet;
using NServiceBus;
using System;
using System.Collections.Generic;
using System.Text;

namespace MicroServices.Messages
{
    public class MqttReceivedMessage : IMessage
    {
        public string ClientId { get; set; }
        public MqttApplicationMessage Message { get; set; }
    }
}
