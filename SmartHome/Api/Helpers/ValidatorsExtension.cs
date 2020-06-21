using Api.Models;
using Api.Validators;
using FluentValidation;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Api.Helpers
{
    public static class ValidatorsExtension
    {
        public static void RegisterValidators(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddSingleton<IValidator<DeviceViewModel>, DeviceViewModelValidator>();
        }
    }
}
