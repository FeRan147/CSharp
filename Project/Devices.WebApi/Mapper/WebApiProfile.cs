using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using D = Project.Domain.Models;
using W = Project.WebApi.Models;

namespace Project.WebApi.Mapper
{
    public class WebApiProfile : Profile
    {
        public WebApiProfile()
        {
            CreateMap<W.Device, D.Device>().ReverseMap();
            CreateMap<W.User, D.User>().ReverseMap();
        }
    }
}
