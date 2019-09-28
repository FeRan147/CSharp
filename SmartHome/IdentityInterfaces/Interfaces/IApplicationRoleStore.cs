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
        IQueryable<ApplicationRole> Roles { get; }

        Task AddClaimAsync(ApplicationRole role, Claim claim, CancellationToken cancellationToken = default);
        string ConvertIdFromString(string id);
        string ConvertIdToString(string id);
        Task<IdentityResult> CreateAsync(ApplicationRole role, CancellationToken cancellationToken = default);
        Task<IdentityResult> DeleteAsync(ApplicationRole role, CancellationToken cancellationToken = default);
        bool Equals(object obj);
        Task<ApplicationRole> FindByIdAsync(string id, CancellationToken cancellationToken = default);
        Task<ApplicationRole> FindByNameAsync(string normalizedName, CancellationToken cancellationToken = default);
        Task<IList<Claim>> GetClaimsAsync(ApplicationRole role, CancellationToken cancellationToken = default);
        int GetHashCode();
        Task<string> GetNormalizedRoleNameAsync(ApplicationRole role, CancellationToken cancellationToken = default);
        Task<string> GetRoleIdAsync(ApplicationRole role, CancellationToken cancellationToken = default);
        Task<string> GetRoleNameAsync(ApplicationRole role, CancellationToken cancellationToken = default);
        Task RemoveClaimAsync(ApplicationRole role, Claim claim, CancellationToken cancellationToken = default);
        Task SetNormalizedRoleNameAsync(ApplicationRole role, string normalizedName, CancellationToken cancellationToken = default);
        Task SetRoleNameAsync(ApplicationRole role, string roleName, CancellationToken cancellationToken = default);
        string ToString();
        Task<IdentityResult> UpdateAsync(ApplicationRole role, CancellationToken cancellationToken = default);
    }
}