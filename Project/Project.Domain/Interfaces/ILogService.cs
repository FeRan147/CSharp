using Project.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Project.Domain.Interfaces
{
    public interface ILogService
    {
        Task<IList<Log>> GetLogsAsync();
        Task SaveLogAsync(Log log);
    }
}
