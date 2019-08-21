using Project.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Project.Domain.Interfaces
{
    public interface IBaseService<T> : IDisposable where T : class
    {
        Task<IList<T>> GetAllAsync(bool include);
        Task<T> GetAsync(int id, bool include);
        Task<IList<T>> GetPagedAsync(int currentPage, int onPage);
        Task DeleteAsync(int id);
        Task SaveAsync(int? id, T item);
    }
}
