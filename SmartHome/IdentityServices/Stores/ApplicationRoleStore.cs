using IdentityInterfaces.Interfaces;
using IdentityInterfaces.Models;
using InfrastructureServices.Contexts;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace IdentityServices.Stores
{
    public class ApplicationRoleStore : RoleStore<Role, DefaultContext>, IApplicationRoleStore
    {
        public ApplicationRoleStore(DefaultContext context, IdentityErrorDescriber describer = null) : base(context, describer)
        {
        }
    }
}
