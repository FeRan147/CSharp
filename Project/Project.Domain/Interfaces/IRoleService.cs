using Project.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Project.Domain.Interfaces
{
    public interface IRoleService
    {
        Task<IList<Role>> GetRolesAsync();
        Task<Role> GetRoleAsync(int id);
        Task DeleteRoleAsync(int id);
        Task SaveRoleAsync(int? id, Role role);
    }
}
