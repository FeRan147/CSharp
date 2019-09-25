using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Hosting.Server.Features;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace Api
{
    public class Program
    {
        public static void Main(string[] args)
        {
            AsyncMain(args).GetAwaiter().GetResult();
        }

        static async Task AsyncMain(string[] args)
        {
            var host = CreateWebHostBuilder(args).Build();

            await host.StartAsync().ConfigureAwait(false);

            var serverAddresses = host.ServerFeatures.Get<IServerAddressesFeature>();
            var address = serverAddresses.Addresses.First();

            Console.WriteLine($"Now listening on: {address}");
            Console.WriteLine("Press any key to shutdown");

            Console.ReadKey();
            await host.StopAsync()
                .ConfigureAwait(false);
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();
    }
}
