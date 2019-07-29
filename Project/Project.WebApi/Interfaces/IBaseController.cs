using Microsoft.AspNetCore.Mvc;
using Project.WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project.WebApi.Interfaces
{
    public interface IBaseController<T> where T: class
    {
        Task<IEnumerable<T>> GetAllAsync(bool includeDevices);
        Task<T> GetAsync(int id, bool includeDevices);
        Task PostAsync([FromBody] T entity);
        Task PutAsync(int id, [FromBody] T entity);
        Task DeleteAsync(int id);
        Task<IList<T>> GetPagedAsync(int currentPage, int onPage);
    }
}
