using AutoMapper;
using D = DomainInterfaces.Models;
using DM = DomainInterfaces.MongoModels;
using AIM = IdentityInterfaces.Models;
using I = InfrastructureInterfaces.Models;
using IM = InfrastructureInterfaces.MongoModels;

namespace DomainInterfaces.Mapper
{
    public class DomainProfile : Profile
    {
        public DomainProfile()
        {
            CreateMap<D.Device, I.Device>().ForMember(x => x.Id, opt => opt.Ignore()).ReverseMap();
            CreateMap<D.Log, I.Log>().ForMember(x => x.Id, opt => opt.Ignore()).ReverseMap();
            CreateMap<DM.OnlineDevice, IM.OnlineDevice>().ReverseMap();
            CreateMap<DM.TopicDevice, IM.TopicDevice>().ReverseMap();
            CreateMap<D.Device, DM.OnlineDevice>().ReverseMap();
            CreateMap<D.User, AIM.User>().ReverseMap();
            CreateMap<D.Role, AIM.Role>().ReverseMap();
        }
    }
}
