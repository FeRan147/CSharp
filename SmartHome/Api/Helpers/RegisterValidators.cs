using Api.Models;
using Api.Validators;
using FluentValidation;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Helpers
{
    public class RegisterValidators
    {
        private IServiceCollection _services;
        private IConfiguration _configuration;

        public RegisterValidators(IServiceCollection services, IConfiguration configuration)
        {
            _services = services;
            _configuration = configuration;
        }

        public void Register()
        {
            _services.AddSingleton<IValidator<DeviceViewModel>, DeviceViewModelValidator>();
        }
    }
}
