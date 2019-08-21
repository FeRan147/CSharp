using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Project.Domain.Interfaces;
using Project.Domain.Models;
using Project.Infrastructure.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using I = Project.Infrastructure.Models;

namespace Project.DomainServices.Services
{
    public class LogService: ILogService
    {
        private readonly IMapper _mapper;
        private readonly IContextFactory _contextFactory;

        public LogService(IMapper mapper, IContextFactory contextFactory)
        {
            _mapper = mapper;
            _contextFactory = contextFactory;
        }

        public async Task<IList<Log>> GetLogsAsync()
        {
            using (var context = _contextFactory.GetProjectContext())
            {
                var logsQuery = context.Logs.AsQueryable();

                var devices = await logsQuery.ToListAsync();

                return devices.Select(item =>
                {
                    var entity = _mapper.Map<Log>(item);
                    return entity;
                }).ToList();
            }
        }

        public async Task SaveLogAsync(Log log)
        {
            if (log == null) return;

            using (var context = _contextFactory.GetProjectContext())
            {
                await context.Logs.AddAsync(_mapper.Map<I.Log>(log));

                context.SaveChanges();
            }
        }
    }
}
