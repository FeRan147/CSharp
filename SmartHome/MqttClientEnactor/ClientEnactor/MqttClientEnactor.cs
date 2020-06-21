using Microsoft.Extensions.Configuration;
using MqttClientEnactor.Interfaces;
using MQTTnet;
using MQTTnet.Client;
using MQTTnet.Client.Options;
using MQTTnet.Protocol;
using System.Text;
using System.Threading.Tasks;

namespace MqttClientEnactor.ClientEnactor
{
    public class MqttClientEnactor : IMqttClientEnactor
    {
        private readonly IConfiguration _configuration;

        public MqttClientEnactor(IConfiguration configuration)
        {
            _configuration = configuration;

        }

        public void Dispose()
        {

        }

        public async Task PublishAsync(MqttApplicationMessage message)
        {
            var options = new MqttClientOptionsBuilder()
                                .WithClientId(_configuration.GetSection("MQTT").GetSection("MqttClientEnactorName").Value)
                                .WithTcpServer(_configuration.GetSection("MQTT").GetSection("IP").Value, int.Parse(_configuration.GetSection("MQTT").GetSection("Port").Value))
                                .Build();

            var client = new MqttFactory().CreateMqttClient();

            await client.ConnectAsync(options);
            await client.PublishAsync(message.Topic, Encoding.UTF8.GetString(message.Payload), MqttQualityOfServiceLevel.AtMostOnce);
            await client.DisconnectAsync();
        }
    }
}
