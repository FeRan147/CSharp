using MicroServices.Configuration;
using Microsoft.AspNetCore.Builder;
using System;
using System.Collections.Generic;
using System.Text;

namespace DependencyInjection.Modules
{
    public static class AppModule
    {
        public static void Register(IApplicationBuilder app)
        {
            AppConfiguration.Register(app);
        }
    }
}
