using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading;
using System.Threading.Tasks;
using IdentityInterfaces.Models;
using Microsoft.AspNetCore.Identity;

namespace IdentityInterfaces.Interfaces
{
    public interface IApplicationRoleStore
    {
        IQueryable<Role> Roles { get; }

        Task AddClaimAsync(Role role, Claim claim, CancellationToken cancellationToken = default);
        string ConvertIdFromString(string id);
        string ConvertIdToString(string id);
        Task<IdentityResult> CreateAsync(Role role, CancellationToken cancellationToken = default);
        Task<IdentityResult> DeleteAsync(Role role, CancellationToken cancellationToken = default);
        bool Equals(object obj);
        Task<Role> FindByIdAsync(string id, CancellationToken cancellationToken = default);
        Task<Role> FindByNameAsync(string normalizedName, CancellationToken cancellationToken = default);
        Task<IList<Claim>> GetClaimsAsync(Role role, CancellationToken cancellationToken = default);
        int GetHashCode();
        Task<string> GetNormalizedRoleNameAsync(Role role, CancellationToken cancellationToken = default);
        Task<string> GetRoleIdAsync(Role role, CancellationToken cancellationToken = default);
        Task<string> GetRoleNameAsync(Role role, CancellationToken cancellationToken = default);
        Task RemoveClaimAsync(Role role, Claim claim, CancellationToken cancellationToken = default);
        Task SetNormalizedRoleNameAsync(Role role, string normalizedName, CancellationToken cancellationToken = default);
        Task SetRoleNameAsync(Role role, string roleName, CancellationToken cancellationToken = default);
        string ToString();
        Task<IdentityResult> UpdateAsync(Role role, CancellationToken cancellationToken = default);
    }
}