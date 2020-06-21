using DomainInterfaces.Interfaces;
using DomainInterfaces.MongoModels;
using MicroServices.Messages;
using NServiceBus;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace MicroServices.Handlers
{
    public class MqttReceivedMessageHandler : IHandleMessages<MqttReceivedMessage>
    {
        private readonly IDeviceService _deviceService;
 
        public MqttReceivedMessageHandler(IDeviceService deviceService)
        {
            _deviceService = deviceService;
        }

        public Task Handle(MqttReceivedMessage message, IMessageHandlerContext context)
        {
            var topicDevice = new TopicDevice
            {
                Name = message.ClientId,
                Topic = message.Message.Topic,
                Payload = message.Message.Payload != null ? Encoding.UTF8.GetString(message.Message.Payload) : ""
            };

            Task.Run(async () => await _deviceService.ReceiveMqttMessageAsync(topicDevice).ConfigureAwait(false));

            return context.Reply(HttpStatusCode.OK);
        }
    }
}
