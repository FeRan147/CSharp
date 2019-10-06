using System;
using System.Collections.Generic;
using System.Text;
using NServiceBus;

namespace DomainInterfaces.Messages.Devices
{
    public class RemoveDevice : IMessage
    {
        public int Id { get; set; }
    }
}
