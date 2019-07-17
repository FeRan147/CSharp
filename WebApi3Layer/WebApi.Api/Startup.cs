using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using AutoMapper;
using BusinessLogic.BL.ConfigModels;
using BusinessLogic.BL.Extensions;
using BusinessLogic.BL.Profiles;
using DataAccess.DA.Extensions;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Swashbuckle.AspNetCore.Swagger;
using WebApi.Api.Config;
using WebApi.Api.Profiles;

namespace WebApi.Api
{
    public class Startup
    {
        public IConfiguration Configuration { get; }
        private StartupOptions StartupOpts { get; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;

            //Получаем настройки
            StartupOpts = new StartupOptions();
            var appSettings = Configuration.GetSection("AppSettings");
            StartupOpts.EnableSwagger = bool.Parse(
                appSettings.GetValue<string>("EnableSwagger") ?? "true"
            );
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSingleton<StartupOptions>(StartupOpts);

            services.AddCors(options =>
            {
                options.AddPolicy("AllowAllOrigins", builder =>
                {
                    builder.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin().AllowCredentials();
                });
            });

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2).AddJsonOptions(options =>
            {
                options.SerializerSettings.Converters.Add(new Newtonsoft.Json.Converters.StringEnumConverter());
                options.SerializerSettings.NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore;
            });

            services.Configure<AppConfig>(Configuration.GetSection("ApiConfig"));

            if (StartupOpts.EnableSwagger)
            {
                // Register the Swagger generator
                services.AddSwaggerGen(c =>
                {
                    c.SwaggerDoc("v1", new Info { Title = "API Doc", Version = "v1" });

                    // Set the comments path for the Swagger JSON and UI.
                    var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
                    var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
                    c.IncludeXmlComments(xmlPath);
                });
            }

            services.AddAutoMapper(cfg =>
            {
                cfg.AddProfile<BLProfile>();
                cfg.AddProfile<ApiProfile>();
            });

            services.ConfigureDataAccess(Configuration.GetConnectionString("Test"))
                .ConfigureBusinessLogic();

            services.BuildServiceProvider();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
