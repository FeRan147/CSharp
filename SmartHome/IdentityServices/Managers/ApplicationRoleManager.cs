using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using IdentityInterfaces.Models;
using IdentityInterfaces.Interfaces;

namespace IdentityServices.Managers
{
    public class ApplicationRoleManager : RoleManager<ApplicationRole>, IApplicationRoleManager
    {
        public ApplicationRoleManager(IRoleStore<ApplicationRole> store, IEnumerable<IRoleValidator<ApplicationRole>> roleValidators, ILookupNormalizer keyNormalizer, IdentityErrorDescriber errors, ILogger<RoleManager<ApplicationRole>> logger) : base(store, roleValidators, keyNormalizer, errors, logger)
        {
        }

        public override ILogger Logger { get => base.Logger; set => base.Logger = value; }

        public override IQueryable<ApplicationRole> Roles => base.Roles;

        public override bool SupportsQueryableRoles => base.SupportsQueryableRoles;

        public override bool SupportsRoleClaims => base.SupportsRoleClaims;

        protected override CancellationToken CancellationToken => base.CancellationToken;

        public override Task<IdentityResult> AddClaimAsync(ApplicationRole role, Claim claim)
        {
            return base.AddClaimAsync(role, claim);
        }

        public override Task<IdentityResult> CreateAsync(ApplicationRole role)
        {
            return base.CreateAsync(role);
        }

        public override Task<IdentityResult> DeleteAsync(ApplicationRole role)
        {
            return base.DeleteAsync(role);
        }

        public override bool Equals(object obj)
        {
            return base.Equals(obj);
        }

        public override Task<ApplicationRole> FindByIdAsync(string roleId)
        {
            return base.FindByIdAsync(roleId);
        }

        public override Task<ApplicationRole> FindByNameAsync(string roleName)
        {
            return base.FindByNameAsync(roleName);
        }

        public override Task<IList<Claim>> GetClaimsAsync(ApplicationRole role)
        {
            return base.GetClaimsAsync(role);
        }

        public override int GetHashCode()
        {
            return base.GetHashCode();
        }

        public override Task<string> GetRoleIdAsync(ApplicationRole role)
        {
            return base.GetRoleIdAsync(role);
        }

        public override Task<string> GetRoleNameAsync(ApplicationRole role)
        {
            return base.GetRoleNameAsync(role);
        }

        public override string NormalizeKey(string key)
        {
            return base.NormalizeKey(key);
        }

        public override Task<IdentityResult> RemoveClaimAsync(ApplicationRole role, Claim claim)
        {
            return base.RemoveClaimAsync(role, claim);
        }

        public override Task<bool> RoleExistsAsync(string roleName)
        {
            return base.RoleExistsAsync(roleName);
        }

        public override Task<IdentityResult> SetRoleNameAsync(ApplicationRole role, string name)
        {
            return base.SetRoleNameAsync(role, name);
        }

        public override string ToString()
        {
            return base.ToString();
        }

        public override Task<IdentityResult> UpdateAsync(ApplicationRole role)
        {
            return base.UpdateAsync(role);
        }

        public override Task UpdateNormalizedRoleNameAsync(ApplicationRole role)
        {
            return base.UpdateNormalizedRoleNameAsync(role);
        }

        protected override void Dispose(bool disposing)
        {
            base.Dispose(disposing);
        }

        protected override Task<IdentityResult> UpdateRoleAsync(ApplicationRole role)
        {
            return base.UpdateRoleAsync(role);
        }

        protected override Task<IdentityResult> ValidateRoleAsync(ApplicationRole role)
        {
            return base.ValidateRoleAsync(role);
        }
    }
}
