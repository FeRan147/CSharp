using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace MqttServerBroker.Interfaces
{
    public interface IMqttServerBroker : IDisposable
    {
        Task RunAsync();
    }
}
