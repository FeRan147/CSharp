using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Interfaces
{
    public interface IBaseController<T> where T : class
    {
        Task<IEnumerable<T>> GetAllAsync();
        Task<T> GetAsync(int id);
        Task PostAsync([FromBody] T entity);
        Task PutAsync(int id, [FromBody] T entity);
        Task DeleteAsync(int id);
        Task<IList<T>> GetPagedAsync(int currentPage, int onPage);
    }
}
