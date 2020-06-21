using IdentityInterfaces.Interfaces;
using IdentityInterfaces.Models;
using InfrastructureServices.Contexts;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace IdentityServices.Stores
{
    public class ApplicationUserStore : UserStore<User, Role, DefaultContext>, IApplicationUserStore
    {
        public ApplicationUserStore(DefaultContext context, IdentityErrorDescriber describer = null) : base(context, describer)
        {
        }
    }
}
