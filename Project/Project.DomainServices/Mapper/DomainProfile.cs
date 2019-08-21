using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using D = Project.Domain.Models;
using I = Project.Infrastructure.Models;

namespace Project.DomainServices.Mapper
{
    public class DomainProfile : Profile
    {
        public DomainProfile()
        {
            CreateMap<D.Device, I.Device>().ReverseMap();
            CreateMap<D.User, I.User>().ReverseMap();
            CreateMap<D.Log, I.Log>().ReverseMap();
            CreateMap<D.Role, I.Role>().ReverseMap();
        }
    }
}
