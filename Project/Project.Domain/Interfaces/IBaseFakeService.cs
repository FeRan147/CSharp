using Project.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Project.Domain.Interfaces
{
    public interface IBaseFakeService<T> : IDisposable where T : class
    {
        IList<T> GetAll(bool include);
        T Get(int id, bool include);
        IList<T> GetPaged(int currentPage, int onPage);
        void Delete(int id);
        void Add(T device);
        void Update(int id, T device);
    }
}
