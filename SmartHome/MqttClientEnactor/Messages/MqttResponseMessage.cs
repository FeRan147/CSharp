using MQTTnet;
using NServiceBus;
using System;
using System.Collections.Generic;
using System.Text;

namespace MqttClientEnactor.Messages
{
    public class MqttResponseMessage : IMessage
    {
        public string ClientId { get; set; }
        public MqttApplicationMessage Message { get; set; }
    }
}
