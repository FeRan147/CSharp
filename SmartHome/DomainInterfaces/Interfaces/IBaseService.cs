using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DomainInterfaces.Interfaces
{
    public interface IBaseService<T> : IDisposable where T : class
    {
        Task<IList<T>> GetAllAsync();
        Task<T> GetAsync(int id);
        Task<IList<T>> GetPagedAsync(int currentPage, int onPage);
        Task DeleteAsync(int id);
        Task SaveAsync(int? id, T item);
    }
}
