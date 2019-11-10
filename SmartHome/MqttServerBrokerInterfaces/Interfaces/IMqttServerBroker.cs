using System;
using System.Threading.Tasks;

namespace MqttServerBrokerInterfaces.Interfaces
{
    public interface IMqttServerBroker : IDisposable
    {
        Task RunAsync();
    }
}
