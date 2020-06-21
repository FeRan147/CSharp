using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using IdentityInterfaces.Models;
using IdentityInterfaces.Interfaces;

namespace IdentityServices.Managers
{
    public class ApplicationRoleManager : RoleManager<Role>, IApplicationRoleManager
    {
        public ApplicationRoleManager(IRoleStore<Role> store, IEnumerable<IRoleValidator<Role>> roleValidators, ILookupNormalizer keyNormalizer, IdentityErrorDescriber errors, ILogger<RoleManager<Role>> logger) : base(store, roleValidators, keyNormalizer, errors, logger)
        {
        }
    }
}
