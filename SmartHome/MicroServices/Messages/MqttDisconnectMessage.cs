using NServiceBus;

namespace MicroServices.Messages
{
    public class MqttDisconnectMessage : IMessage
    {
        public string ClientId { get; set; }
    }
}
