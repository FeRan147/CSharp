using Microsoft.AspNetCore.Builder;
using System;
using System.Collections.Generic;
using System.Text;

namespace MicroServices.Configuration
{
    public static class AppConfiguration
    {
        private static IApplicationBuilder App;

        public static void Register(IApplicationBuilder app)
        {
            App = app;
        }

        public static IApplicationBuilder GetApp()
        {
            return App;
        }
    }
}
