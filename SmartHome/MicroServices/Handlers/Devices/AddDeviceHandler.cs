using NServiceBus;
using System;
using System.Collections.Generic;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using DomainInterfaces.Interfaces;
using InfrastructureInterfaces.Interfaces;
using NServiceBus.Logging;
using MicroServices.Messages.Devices;

namespace MicroServices.Handlers.Devices
{
    public class AddDeviceHandler :
        IHandleMessages<AddDevice>
    {
        private readonly IMapper _mapper;
        private readonly IContextFactory _contextFactory;
        private readonly IDeviceService _deviceService;
        private static readonly ILog Log = LogManager.GetLogger<IDeviceService>();

        public AddDeviceHandler(IMapper mapper, IContextFactory contextFactory, IDeviceService deviceService)
        {
            _mapper = mapper;
            _contextFactory = contextFactory;
            _deviceService = deviceService;
        }

        public Task Handle(AddDevice message, IMessageHandlerContext context)
        {
            Task.Run(async () => await _deviceService.SaveAsync(null, message.Device));

            Log.Info("AddDevice executed");

            return context.Reply(HttpStatusCode.OK);
        }
    }
}
