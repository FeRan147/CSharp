using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using WebApi.Api.Models;
using BL = BusinessLogic.BL.Models;

namespace WebApi.Api.Profiles
{ 
    public class ApiProfile : Profile
    {
        public ApiProfile()
        {
            CreateMap<Test, BL.Test>().ReverseMap();
        }
    }
}
