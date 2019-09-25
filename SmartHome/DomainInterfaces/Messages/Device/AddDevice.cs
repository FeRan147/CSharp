using System;
using System.Collections.Generic;
using System.Text;
using NServiceBus;

namespace DomainInterfaces.Messages.Device
{
    public class AddDevice : IMessage
    {
        public Models.Device Device { get; set; }
    }
}
