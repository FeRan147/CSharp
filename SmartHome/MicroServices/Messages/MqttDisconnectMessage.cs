using NServiceBus;
using System;
using System.Collections.Generic;
using System.Text;

namespace MicroServices.Messages
{
    public class MqttDisconnectMessage : IMessage
    {
        public string ClientId { get; set; }
    }
}
