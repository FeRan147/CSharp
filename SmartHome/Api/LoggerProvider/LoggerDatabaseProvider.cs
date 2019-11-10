using Api.Models;
using AutoMapper;
using DomainInterfaces.Interfaces;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using D = DomainInterfaces.Models;

namespace Api.LoggerProvider
{
    public class LoggerDatabaseProvider : ILoggerProvider
    {
        private readonly IMapper _mapper;
        private readonly ILogService _logService;

        public LoggerDatabaseProvider(IMapper mapper, ILogService logService)
        {
            _mapper = mapper;
            _logService = logService;
        }

        public ILogger CreateLogger(string categoryName)
        {
            return new Logger(categoryName, _logService, _mapper);
        }

        public void Dispose()
        {
        }

        public class Logger : ILogger
        {
            private readonly string _categoryName;
            private readonly ILogService _logService;
            private readonly IMapper _mapper;

            public Logger(string categoryName, ILogService logService, IMapper mapper)
            {
                _logService = logService;
                _categoryName = categoryName;
                _mapper = mapper;
            }

            public bool IsEnabled(LogLevel logLevel)
            {
                return true;
            }

            public void Log<TState>(LogLevel logLevel, EventId eventId, TState state, Exception exception, Func<TState, Exception, string> formatter)
            {
                RecordMsg(logLevel, eventId, state, exception, formatter);
            }

            private void RecordMsg<TState>(LogLevel logLevel, EventId eventId, TState state, Exception exception, Func<TState, Exception, string> formatter)
            {
                _logService.SaveAsync(_mapper.Map<D.Log>(new LogViewModel
                {
                    LogLevel = logLevel.ToString(),
                    CategoryName = _categoryName,
                    Message = formatter(state, exception),
                    TimeStamp = DateTime.Now
                }));
            }

            public IDisposable BeginScope<TState>(TState state)
            {
                return new NoopDisposable();
            }

            private class NoopDisposable : IDisposable
            {
                public void Dispose()
                {
                }
            }
        }
    }
}
