using System;
using System.Collections.Generic;
using System.Text;
using NServiceBus;

namespace DomainInterfaces.Messages.Device
{
    public class UpdateDevice : IMessage
    {
        public int Id { get; set; }
        public Models.Device Device { get; set; }
    }
}
