using MicroServices.Messages;
using MqttClientEnactor.Interfaces;
using NServiceBus;
using System.Net;
using System.Threading.Tasks;

namespace MicroServices.Handlers
{
    public class MqttResponseMessageHandler : IHandleMessages<MqttResponseMessage>
    {
        private readonly IMqttClientEnactor _mqttClient;

        public MqttResponseMessageHandler(IMqttClientEnactor mqttClient)
        {
            _mqttClient = mqttClient;
        }

        public async Task Handle(MqttResponseMessage message, IMessageHandlerContext context)
        {
            await _mqttClient.PublishAsync(message.Message).ConfigureAwait(false);

            await context.Reply(HttpStatusCode.OK);
        }
    }
}
