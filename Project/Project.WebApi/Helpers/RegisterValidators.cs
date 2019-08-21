using FluentValidation;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Project.WebApi.Models;
using Project.WebApi.Validators;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project.WebApi.Helpers
{
    public static class RegisterValidators
    {
        public static void Register(IServiceCollection services, IConfiguration configuration)
        {
            services.AddSingleton<IValidator<Device>, DeviceValidator>();
            services.AddSingleton<IValidator<User>, UserValidator>();
            services.AddSingleton<IValidator<Role>, RoleValidator>();
        }
    }
}
