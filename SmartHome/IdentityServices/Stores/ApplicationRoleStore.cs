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
    public class ApplicationRoleStore : RoleStore<ApplicationRole, DefaultContext>, IApplicationRoleStore
    {
        public ApplicationRoleStore(DefaultContext context, IdentityErrorDescriber describer = null) : base(context, describer)
        {
        }
    }
}
