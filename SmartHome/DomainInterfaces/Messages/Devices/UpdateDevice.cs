using System;
using System.Collections.Generic;
using System.Text;
using NServiceBus;
using DomainInterfaces.Models;

namespace DomainInterfaces.Messages.Devices
{
    public class UpdateDevice : IMessage
    {
        public int Id { get; set; }
        public Device Device { get; set; }
    }
}
