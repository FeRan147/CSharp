using System;
using System.Collections.Generic;
using System.Text;
using NServiceBus;
using DomainInterfaces.Models;

namespace DomainInterfaces.Messages.Services.Devices
{
    public class AddDevice : IMessage
    {
        public Device Device { get; set; }
    }
}
