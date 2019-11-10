using MQTTnet;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace MqttClientEnactor.Interfaces
{
    public interface IMqttClientEnactor : IDisposable
    {
        Task PublishAsync(MqttApplicationMessage message);
    }
}