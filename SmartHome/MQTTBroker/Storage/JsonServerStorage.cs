using MQTTnet;
using MQTTnet.Server;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Threading.Tasks;

namespace MQTTBroker.Storage
{
    public class JsonServerStorage : IMqttServerStorage
    {
        private readonly string _filename = Path.Combine("D:\\MQTT", "Retained.json");

        public Task SaveRetainedMessagesAsync(IList<MqttApplicationMessage> messages)
        {
            var directory = Path.GetDirectoryName(_filename);
            if (!Directory.Exists(directory))
            {
                Directory.CreateDirectory(directory);
            }

            File.WriteAllText(_filename, JsonConvert.SerializeObject(messages));
            return Task.FromResult(0);
        }

        public Task<IList<MqttApplicationMessage>> LoadRetainedMessagesAsync()
        {
            IList<MqttApplicationMessage> retainedMessages;
            if (File.Exists(_filename))
            {
                var json = File.ReadAllText(_filename);
                retainedMessages = JsonConvert.DeserializeObject<List<MqttApplicationMessage>>(json);
            }
            else
            {
                retainedMessages = new List<MqttApplicationMessage>();
            }

            return Task.FromResult(retainedMessages);
        }

        public void Clear()
        {
            if (File.Exists(_filename))
            {
                File.Delete(_filename);
            }
        }
    }
}
