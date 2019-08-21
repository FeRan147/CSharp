using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Internal;
using Microsoft.Extensions.Logging;
using Project.Domain.Interfaces;
using Project.WebApi.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using D = Project.Domain.Models;

namespace Project.WebApi.Helpers
{
    public class LoggingMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger _logger;
        private readonly IMapper _mapper;
        private readonly ILogService _logService;

        public LoggingMiddleware(RequestDelegate next, ILoggerFactory loggerFactory, IMapper mapper, ILogService logService)
        {
            _next = next;
            _logger = loggerFactory
                        .CreateLogger<LoggingMiddleware>();
            _mapper = mapper;
            _logService = logService;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            Log log = new Log();

            log.RequestHost = context.Request.Host.ToString();
            log.RequestMethod = context.Request.Method.ToString();
            log.RequestPath = context.Request.Path.ToString();
            log.RequestProtocol = context.Request.Protocol.ToString();

            var sw = new Stopwatch();
            sw.Start();

            await _next(context);

            sw.Stop();

            log.ResponseCode = context.Response.StatusCode.ToString();

            await _logService.SaveLogAsync(_mapper.Map<D.Log>(log));
        }
    }
}
