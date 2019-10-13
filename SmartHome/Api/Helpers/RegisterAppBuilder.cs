using DependencyInjection.Modules;
using Microsoft.AspNetCore.Builder;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Helpers
{
    public static class RegisterAppBuilder
    {
        public static void Register(IApplicationBuilder app)
        {
            AppModule.Register(app);
        }
    }
}
