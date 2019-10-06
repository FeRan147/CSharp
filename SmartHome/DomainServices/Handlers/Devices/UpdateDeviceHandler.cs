using System;
using System.Collections.Generic;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using DomainInterfaces.Interfaces;
using DomainInterfaces.Messages.Devices;
using InfrastructureInterfaces.Interfaces;
using NServiceBus;
using NServiceBus.Logging;

namespace DomainServices.Handlers.Devices
{
    public class UpdateDeviceHandler :
        IHandleMessages<UpdateDevice>
    {
        private readonly IMapper _mapper;
        private readonly IContextFactory _contextFactory;
        private readonly IDeviceService _deviceService;
        private static readonly ILog Log = LogManager.GetLogger<IDeviceService>();

        public UpdateDeviceHandler(IMapper mapper, IContextFactory contextFactory, IDeviceService deviceService)
        {
            _mapper = mapper;
            _contextFactory = contextFactory;
            _deviceService = deviceService;
        }

        public Task Handle(UpdateDevice message, IMessageHandlerContext context)
        {
            _deviceService.SaveAsync(message.Id, message.Device).GetAwaiter().GetResult();

            Log.Info("UpdateDevice executed");

            return context.Reply(HttpStatusCode.OK);
        }
    }
}
