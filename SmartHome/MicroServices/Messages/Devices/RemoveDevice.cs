using System;
using System.Collections.Generic;
using System.Text;
using NServiceBus;

namespace MicroServices.Messages.Devices
{
    public class RemoveDevice : IMessage
    {
        public int Id { get; set; }
    }
}
