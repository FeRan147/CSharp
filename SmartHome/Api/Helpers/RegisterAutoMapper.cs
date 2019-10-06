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
        private IServiceCollection _services;
        private IConfiguration _configuration;

        public RegisterAutoMapper(IServiceCollection services, IConfiguration configuration)
        {
            _services = services;
            _configuration = configuration;
        }

        public void Register()
        {
            var mappingConfig = new MapperConfiguration(mc =>
            {
                mc.AddProfile(new ApiProfile());
                mc.AddProfile(new DomainProfile());
            });

            IMapper mapper = mappingConfig.CreateMapper();

            _services.AddSingleton(mapper);
        }
    }
}
