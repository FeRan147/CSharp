using AutoMapper;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Mapper;
using DomainServices.Mapper;

namespace Api.Helpers
{
    public class RegisterAutoMapper
    {
        public static void Register(IServiceCollection services, IConfiguration configuration)
        {
            var mappingConfig = new MapperConfiguration(mc =>
            {
                mc.AddProfile(new ApiProfile());
                mc.AddProfile(new DomainProfile());
            });

            IMapper mapper = mappingConfig.CreateMapper();

            services.AddSingleton(mapper);
        }
    }
}
