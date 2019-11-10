using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using DomainInterfaces.Interfaces;
using DomainInterfaces.Models;
using DomainInterfaces.MongoModels;
using InfrastructureInterfaces.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using MongoDB.Bson;
using MongoDB.Driver;
using I = InfrastructureInterfaces.Models;
using IM = InfrastructureInterfaces.MongoModels;

namespace DomainServices.Services
{
    public class DeviceService : IDeviceService
    {
        private readonly IMapper _mapper;
        private readonly IContextFactory _contextFactory;
        private readonly ILogger _logger;

        public DeviceService(IMapper mapper, IContextFactory contextFactory, ILogger<DeviceService> logger)
        {
            _mapper = mapper;
            _contextFactory = contextFactory;
            _logger = logger;
        }

        public async Task<IList<Device>> GetAllAsync()
        {
            using (var context = _contextFactory.GetDefaultContext())
            {
                var devicesQuery = context.Devices.AsQueryable();

                var devices = await devicesQuery
                                    .ToListAsync()
                                    .ConfigureAwait(false);

                return devices.Select(item =>
                {
                    var entity = _mapper.Map<Device>(item);
                    return entity;
                }).ToList();
            }
        }

        public async Task<Device> GetAsync(int id)
        {
            using (var context = _contextFactory.GetDefaultContext())
            {
                var device = await context.Devices.FirstOrDefaultAsync(_ => _.Id == id);

                return _mapper.Map<Device>(device);
            }
        }

        public async Task<Device> GetByNameAsync(string name)
        {
            using (var context = _contextFactory.GetDefaultContext())
            {
                var device = await context.Devices.FirstOrDefaultAsync(_ => _.Name == name);

                return _mapper.Map<Device>(device);
            }
        }

        public async Task DeleteAsync(int id)
        {
            using (var context = _contextFactory.GetDefaultContext())
            {
                var device = await context
                                .Devices
                                .FirstOrDefaultAsync(_ => _.Id.Equals(id))
                                .ConfigureAwait(false);

                if (device == null) return;

                await Task.Run(() => context
                                        .Devices
                                        .Remove(device))
                                        .ConfigureAwait(false);

                context.SaveChanges();
            }
        }

        public async Task SaveAsync(int? id, Device device)
        {
            if (device == null) return;

            using (var context = _contextFactory.GetDefaultContext())
            {
                I.Device chooseDevice = new I.Device();

                if (id != null)
                {
                    chooseDevice = await context
                        .Devices
                        .FirstOrDefaultAsync(_ => _.Id.Equals(id))
                        .ConfigureAwait(false);
                    _mapper.Map(device, chooseDevice);
                }
                else
                {
                    _mapper.Map(device, chooseDevice);
                    await context
                        .Devices
                        .AddAsync(chooseDevice)
                        .ConfigureAwait(false);
                }

                context.SaveChanges();
            }
        }

        public async Task<IList<Device>> GetPagedAsync(int currentPage, int onPage)
        {
            using (var context = _contextFactory.GetDefaultContext())
            {
                var offset = (currentPage - 1) * onPage;

                var devices = await context
                                .Devices
                                .Skip(offset)
                                .Take(onPage)
                                .ToListAsync()
                                .ConfigureAwait(false);

                return devices.Select(item =>
                {
                    var entity = _mapper.Map<Device>(item);
                    return entity;
                }).ToList();
            }
        }

        public async Task<IList<Device>> GetAllFromMongoAsync()
        {
            using (var context = _contextFactory.GetMongoContext())
            {
                var devices = await context.OnlineDevices.FindAsync(_ => true);

                var mappedDevices = new List<Device>();

                await devices.ForEachAsync(item =>
                {
                    var entity = _mapper.Map<Device>(item);
                    mappedDevices.Add(entity);
                }).ConfigureAwait(false);

                return mappedDevices;
            }
        }

        public async Task ConnectDeviceAsync(Device device)
        {
            using (var context = _contextFactory.GetMongoContext())
            {
                var filter = new BsonDocument("Name", device.Name);
                var mongoDevice = await context.OnlineDevices.FindAsync(filter);
                var result = await context.OnlineDevices.FindOneAndReplaceAsync(filter, _mapper.Map<IM.OnlineDevice>(_mapper.Map<OnlineDevice>(device)));
                
                if(result == null) { 
                    var sqlDevice = await GetByNameAsync(device.Name);

                    if(sqlDevice == null)
                    {
                        await SaveAsync(null, device);
                        device = await GetByNameAsync(device.Name);
                    }

                    await context.OnlineDevices.InsertOneAsync(_mapper.Map<IM.OnlineDevice>(_mapper.Map<OnlineDevice>(device)));
                }
            }
        }

        public async Task DisconnectDeviceAsync(Device device)
        {
            using (var context = _contextFactory.GetMongoContext())
            {
                var filter = new BsonDocument("Name", device.Name);
                await context.OnlineDevices.FindOneAndDeleteAsync(filter);
            }
        }

        public async Task ReceiveMqttMessageAsync(TopicDevice topicDevice)
        {
            using (var context = _contextFactory.GetMongoContext())
            {
                var filter = new BsonDocument("$and", new BsonArray{
                    new BsonDocument("Name", topicDevice.Name),
                    new BsonDocument("Topic", topicDevice.Topic)
                });

                var update = new BsonDocument("Payload", topicDevice.Payload);

                var result = await context.TopicDevices.FindOneAndUpdateAsync(filter, update);

                if(result == null) { 
                    await context.TopicDevices.InsertOneAsync(_mapper.Map<IM.TopicDevice>(topicDevice));
                }
            }
        }

        public void Dispose()
        {
        }
    }
}
