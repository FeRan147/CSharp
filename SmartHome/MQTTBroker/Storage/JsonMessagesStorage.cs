using MQTTnet;
using MQTTnet.Server;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Threading.Tasks;

namespace MqttBroker.Storage
{
    public static class JsonMessagesStorage
    {
        private static readonly string _filename = Path.Combine("D:\\MQTT", "Retained.json");

        public static Task SaveRetainedMessageAsync(MqttApplicationMessage message)
        {
            var directory = Path.GetDirectoryName(_filename);
            if (!Directory.Exists(directory))
            {
                Directory.CreateDirectory(directory);
            }

            File.AppendAllText(_filename, JsonConvert.SerializeObject(message) + Environment.NewLine);

            return Task.FromResult(0);
        }
    }
}
