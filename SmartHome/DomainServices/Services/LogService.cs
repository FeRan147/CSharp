using AutoMapper;
using DomainInterfaces.Interfaces;
using DomainInterfaces.Models;
using InfrastructureInterfaces.Interfaces;
using System.Threading.Tasks;
using I = InfrastructureInterfaces.Models;

namespace DomainServices.Services
{
    public class LogService : ILogService
    {
        private readonly IMapper _mapper;
        private readonly IContextFactory _contextFactory;

        public LogService(IMapper mapper, IContextFactory contextFactory)
        {
            _mapper = mapper;
            _contextFactory = contextFactory;
        }

        public void Dispose()
        {

        }

        public async Task SaveAsync(Log log)
        {
            if (log == null) return;

            using (var context = _contextFactory.GetDefaultContext())
            {
                await context
                    .Logs
                    .AddAsync(_mapper.Map<I.Log>(log))
                    .ConfigureAwait(false);

                context.SaveChanges();
            }
        }
    }
}
