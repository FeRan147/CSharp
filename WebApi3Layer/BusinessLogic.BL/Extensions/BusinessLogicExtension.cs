using System;
using System.Collections.Generic;
using System.Text;
using BusinessLogic.BL.Interfaces;
using BusinessLogic.BL.Models;
using BusinessLogic.BL.Services;
using Microsoft.Extensions.DependencyInjection;

namespace BusinessLogic.BL.Extensions
{
    public static class BusinessLogicExtension
    {
        /// <summary>
        /// Configures services for BusinessLogic
        /// </summary>
        /// <param name="services"></param>
        /// <returns></returns>
        public static IServiceCollection ConfigureBusinessLogic(this IServiceCollection services)
        {
            services.AddTransient<ITestService<Test>, TestService>();

            return services;
        }
    }
}
