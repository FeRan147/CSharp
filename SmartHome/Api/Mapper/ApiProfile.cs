using Api.Models;
using AutoMapper;
using D = DomainInterfaces.Models;

namespace Api.Mapper
{
    public class ApiProfile : Profile
    {
        public ApiProfile()
        {
            CreateMap<DeviceViewModel, D.Device>().ForMember(x => x.Id, opt => opt.Ignore()).ReverseMap();
            CreateMap<UserViewModel, D.User>().ReverseMap();
            CreateMap<RoleViewModel, D.Role>().ReverseMap();
            CreateMap<UserViewModel, D.User>().ReverseMap();
            CreateMap<RoleViewModel, D.Role>().ReverseMap();
        }
    }
}
