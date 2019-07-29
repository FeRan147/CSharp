using Microsoft.AspNetCore.Mvc;
using Project.WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project.WebApi.Interfaces
{
    public interface IBaseFakeController<T> where T : class
    {
        IEnumerable<T> GetAll(bool includeDevices);
        T Get(int id, bool includeDevices);
        void Post([FromBody] T entity);
        void Put(int id, [FromBody] T entity);
        void Delete(int id);
        IList<T> GetPaged(int currentPage, int onPage);

    }
}
