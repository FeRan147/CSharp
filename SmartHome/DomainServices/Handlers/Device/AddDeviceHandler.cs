using NServiceBus;
using System;
using System.Collections.Generic;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using DomainInterfaces.Interfaces;
using DomainInterfaces.Messages.Device;
using InfrastructureInterfaces.Interfaces;
using NServiceBus.Logging;

namespace DomainServices.Handlers.Device
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
            _deviceService.SaveAsync(null, message.Device).GetAwaiter().GetResult();

            Log.Info("AddDevice executed");

            return context.Reply(HttpStatusCode.OK);
        }
    }
}
