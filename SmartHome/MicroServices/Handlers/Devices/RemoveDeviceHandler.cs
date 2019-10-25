using System;
using System.Collections.Generic;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using DomainInterfaces.Interfaces;
using InfrastructureInterfaces.Interfaces;
using MicroServices.Messages.Devices;
using NServiceBus;
using NServiceBus.Logging;

namespace MicroServices.Handlers.Devices
{
    public class RemoveDeviceHandler :
        IHandleMessages<RemoveDevice>
    {
        private readonly IMapper _mapper;
        private readonly IContextFactory _contextFactory;
        private readonly IDeviceService _deviceService;
        private static readonly ILog Log = LogManager.GetLogger<IDeviceService>();

        public RemoveDeviceHandler(IMapper mapper, IContextFactory contextFactory, IDeviceService deviceService)
        {
            _mapper = mapper;
            _contextFactory = contextFactory;
            _deviceService = deviceService;
        }

        public Task Handle(RemoveDevice message, IMessageHandlerContext context)
        {

            Task.Run(async () => await _deviceService.DeleteAsync(message.Id));

            Log.Info("RemoveDevice executed");

            return context.Reply(HttpStatusCode.OK);
        }
    }
}
