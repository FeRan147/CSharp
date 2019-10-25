using IdentityInterfaces.Interfaces;
using IdentityInterfaces.Models;
using InfrastructureServices.Contexts;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace IdentityServices.Stores
{
    public class ApplicationUserStore : UserStore<User, Role, DefaultContext>, IApplicationUserStore
    {
        public ApplicationUserStore(DefaultContext context, IdentityErrorDescriber describer = null) : base(context, describer)
        {
        }
    }
}
