using AutoMapper;
using IdentityInterfaces.Models;
using System;
using System.Collections.Generic;
using System.Text;
using D = DomainInterfaces.Models;
using I = InfrastructureInterfaces.Models;

namespace DomainServices.Mapper
{
    public class DomainProfile : Profile
    {
        public DomainProfile()
        {
            CreateMap<D.Device, I.Device>().ForMember(x => x.Id, opt => opt.Ignore()).ReverseMap();
            CreateMap<D.User, User>().ReverseMap();
            CreateMap<D.Role, Role>().ReverseMap();
        }
    }
}
