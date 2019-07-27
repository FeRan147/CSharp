using Project.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Project.Domain.Interfaces
{
    public interface IUserFakeService
    {
        IList<User> GetUsers(bool includeDevices);
        User GetUser(int id, bool includeDevices);
        void DeleteUser(int id);
        void AddUser(User user);
        void UpdateUser(int id, User user);
    }
}
