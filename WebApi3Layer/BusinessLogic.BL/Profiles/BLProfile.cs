using System;
using System.Collections.Generic;
using System.Text;
using AutoMapper;
using BusinessLogic.BL.Models;
using DA = DataAccess.DA.Models;

namespace BusinessLogic.BL.Profiles
{
    public class BLProfile : Profile
    {
        public BLProfile()
        {
            CreateMap<Test, DA.Test>().ReverseMap();
        }
    }
}
