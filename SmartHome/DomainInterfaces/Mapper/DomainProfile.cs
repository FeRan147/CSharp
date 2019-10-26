using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using D = DomainInterfaces.Models;
using AIM = IdentityInterfaces.Models;
using I = InfrastructureInterfaces.Models;

namespace DomainInterfaces.Mapper
{
    public class DomainProfile : Profile
    {
        public DomainProfile()
        {
            CreateMap<D.Device, I.Device>().ForMember(x => x.Id, opt => opt.Ignore()).ReverseMap();
            CreateMap<D.User, AIM.User>().ReverseMap();
            CreateMap<D.Role, AIM.Role>().ReverseMap();
        }
    }
}
