using Api.Models;
using AutoMapper;
using DomainInterfaces.Models;

namespace Api.Mapper
{
    public class ApiProfile : Profile
    {
        public ApiProfile()
        {
            CreateMap<DeviceViewModel, Device>().ForMember(x => x.Id, opt => opt.Ignore()).ReverseMap();
            CreateMap<UserViewModel, User>().ReverseMap();
            CreateMap<RoleViewModel, Role>().ReverseMap();
        }
    }
}
