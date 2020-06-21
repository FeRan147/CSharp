using MQTTnet;
using NServiceBus;

namespace MicroServices.Messages
{
    public class MqttReceivedMessage : IMessage
    {
        public string ClientId { get; set; }
        public MqttApplicationMessage Message { get; set; }
    }
}
