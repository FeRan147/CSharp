using MqttBroker.Storage;
using MQTTnet;
using MQTTnet.Client.Receiving;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace MqttBroker.Handlers
{
    public class MessageHandler : IMqttApplicationMessageReceivedHandler
    {
        public Task HandleApplicationMessageReceivedAsync(MqttApplicationMessageReceivedEventArgs eventArgs)
        {
            JsonMessagesStorage.SaveRetainedMessageAsync(eventArgs.ApplicationMessage);

            return Task.FromResult<object>(null);
        }
    }
}
