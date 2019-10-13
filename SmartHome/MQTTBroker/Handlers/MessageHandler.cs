using MqttBroker.Storage;
using MQTTnet;
using MQTTnet.Client.Receiving;
using MQTTnet.Server;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace MqttBroker.Handlers
{
    public class MessageHandler : IMqttApplicationMessageReceivedHandler
    {
        private readonly IMqttServer _server;
        public MessageHandler(IMqttServer server)
        {
            _server = server;
        }
        public async Task HandleApplicationMessageReceivedAsync(MqttApplicationMessageReceivedEventArgs eventArgs)
        {
            Console.WriteLine(Encoding.UTF8.GetString(eventArgs.ApplicationMessage.Payload));
            if (eventArgs.ClientId != null)
            {
                await _server.SubscribeAsync(eventArgs.ClientId, "test/output");
                await _server.PublishAsync(new MqttApplicationMessageBuilder().WithTopic("test/output").WithPayload("off").Build());
                await _server.UnsubscribeAsync(eventArgs.ClientId, "test/output");
            }
            await JsonMessagesStorage.SaveRetainedMessageAsync(eventArgs.ApplicationMessage);
        }
    }
}
