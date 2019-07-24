using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using D = Project.Domain.Models;
using W = Project.WepApi.Models;

namespace Project.WepApi.Mapper
{
    public class WebApiProfile : Profile
    {
        public WebApiProfile()
        {
            CreateMap<W.Device, D.Device>().ReverseMap();
        }
    }
}
