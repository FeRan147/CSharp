using IdentityInterfaces.Interfaces;
using IdentityInterfaces.Models;
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
    public class ApplicationRoleStore : RoleStore<ApplicationRole>, IApplicationRoleStore
    {
        public ApplicationRoleStore(DbContext context, IdentityErrorDescriber describer = null) : base(context, describer)
        {
        }

        public override IQueryable<ApplicationRole> Roles => base.Roles;

        public override Task AddClaimAsync(ApplicationRole role, Claim claim, CancellationToken cancellationToken = default)
        {
            return base.AddClaimAsync(role, claim, cancellationToken);
        }

        public override string ConvertIdFromString(string id)
        {
            return base.ConvertIdFromString(id);
        }

        public override string ConvertIdToString(string id)
        {
            return base.ConvertIdToString(id);
        }

        public override Task<IdentityResult> CreateAsync(ApplicationRole role, CancellationToken cancellationToken = default)
        {
            return base.CreateAsync(role, cancellationToken);
        }

        public override Task<IdentityResult> DeleteAsync(ApplicationRole role, CancellationToken cancellationToken = default)
        {
            return base.DeleteAsync(role, cancellationToken);
        }

        public override bool Equals(object obj)
        {
            return base.Equals(obj);
        }

        public override Task<ApplicationRole> FindByIdAsync(string id, CancellationToken cancellationToken = default)
        {
            return base.FindByIdAsync(id, cancellationToken);
        }

        public override Task<ApplicationRole> FindByNameAsync(string normalizedName, CancellationToken cancellationToken = default)
        {
            return base.FindByNameAsync(normalizedName, cancellationToken);
        }

        public override Task<IList<Claim>> GetClaimsAsync(ApplicationRole role, CancellationToken cancellationToken = default)
        {
            return base.GetClaimsAsync(role, cancellationToken);
        }

        public override int GetHashCode()
        {
            return base.GetHashCode();
        }

        public override Task<string> GetNormalizedRoleNameAsync(ApplicationRole role, CancellationToken cancellationToken = default)
        {
            return base.GetNormalizedRoleNameAsync(role, cancellationToken);
        }

        public override Task<string> GetRoleIdAsync(ApplicationRole role, CancellationToken cancellationToken = default)
        {
            return base.GetRoleIdAsync(role, cancellationToken);
        }

        public override Task<string> GetRoleNameAsync(ApplicationRole role, CancellationToken cancellationToken = default)
        {
            return base.GetRoleNameAsync(role, cancellationToken);
        }

        public override Task RemoveClaimAsync(ApplicationRole role, Claim claim, CancellationToken cancellationToken = default)
        {
            return base.RemoveClaimAsync(role, claim, cancellationToken);
        }

        public override Task SetNormalizedRoleNameAsync(ApplicationRole role, string normalizedName, CancellationToken cancellationToken = default)
        {
            return base.SetNormalizedRoleNameAsync(role, normalizedName, cancellationToken);
        }

        public override Task SetRoleNameAsync(ApplicationRole role, string roleName, CancellationToken cancellationToken = default)
        {
            return base.SetRoleNameAsync(role, roleName, cancellationToken);
        }

        public override string ToString()
        {
            return base.ToString();
        }

        public override Task<IdentityResult> UpdateAsync(ApplicationRole role, CancellationToken cancellationToken = default)
        {
            return base.UpdateAsync(role, cancellationToken);
        }

        protected override IdentityRoleClaim<string> CreateRoleClaim(ApplicationRole role, Claim claim)
        {
            return base.CreateRoleClaim(role, claim);
        }
    }
}
