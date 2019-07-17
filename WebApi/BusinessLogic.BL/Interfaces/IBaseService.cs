using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogic.BL.Interfaces
{
    public interface IBaseService<T> : IDisposable where T : class
    {
        Task<ICollection<T>> GetAsync();
        Task SaveAsync(T obj);
        Task DeleteAsync(int id);
        Task<T> GetByIdAsync(int id);
    }
}
