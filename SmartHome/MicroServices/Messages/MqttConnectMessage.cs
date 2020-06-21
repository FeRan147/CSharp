using NServiceBus;

namespace MicroServices.Messages
{
    public class MqttConnectMessage : IMessage
    {
        public string ClientId { get; set; }
    }
}
