using Project.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Project.Domain.Interfaces
{
    public interface IUserService
    {
        Task<IList<User>> GetUsersAsync(bool includeDevices);
        Task<User> GetUserAsync(int id, bool includeDevices);
        Task DeleteUserAsync(int id);
        Task SaveUserAsync(int? id, User user);
    }
}
