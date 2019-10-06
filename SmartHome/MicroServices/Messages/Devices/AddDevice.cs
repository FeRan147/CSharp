using System;
using System.Collections.Generic;
using System.Text;
using NServiceBus;
using DomainInterfaces.Models;

namespace MicroServices.Messages.Devices
{
    public class AddDevice : IMessage
    {
        public Device Device { get; set; }
    }
}
