using System;
using System.Collections.Generic;
using System.Text;
using NServiceBus;
using DomainInterfaces.Models;

namespace MicroServices.Messages.Devices
{
    public class UpdateDevice : IMessage
    {
        public int Id { get; set; }
        public Device Device { get; set; }
    }
}
