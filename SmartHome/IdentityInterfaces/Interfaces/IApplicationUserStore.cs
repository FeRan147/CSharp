using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading;
using System.Threading.Tasks;
using IdentityInterfaces.Models;
using Microsoft.AspNetCore.Identity;

namespace IdentityInterfaces.Interfaces
{
    public interface IApplicationUserStore
    {
        IQueryable<ApplicationUser> Users { get; }

        Task AddClaimsAsync(ApplicationUser user, IEnumerable<Claim> claims, CancellationToken cancellationToken = default);
        Task AddLoginAsync(ApplicationUser user, UserLoginInfo login, CancellationToken cancellationToken = default);
        Task AddToRoleAsync(ApplicationUser user, string normalizedRoleName, CancellationToken cancellationToken = default);
        string ConvertIdFromString(string id);
        string ConvertIdToString(string id);
        Task<int> CountCodesAsync(ApplicationUser user, CancellationToken cancellationToken);
        Task<IdentityResult> CreateAsync(ApplicationUser user, CancellationToken cancellationToken = default);
        Task<IdentityResult> DeleteAsync(ApplicationUser user, CancellationToken cancellationToken = default);
        bool Equals(object obj);
        Task<ApplicationUser> FindByEmailAsync(string normalizedEmail, CancellationToken cancellationToken = default);
        Task<ApplicationUser> FindByIdAsync(string userId, CancellationToken cancellationToken = default);
        Task<ApplicationUser> FindByLoginAsync(string loginProvider, string providerKey, CancellationToken cancellationToken = default);
        Task<ApplicationUser> FindByNameAsync(string normalizedUserName, CancellationToken cancellationToken = default);
        Task<int> GetAccessFailedCountAsync(ApplicationUser user, CancellationToken cancellationToken = default);
        Task<string> GetAuthenticatorKeyAsync(ApplicationUser user, CancellationToken cancellationToken);
        Task<IList<Claim>> GetClaimsAsync(ApplicationUser user, CancellationToken cancellationToken = default);
        Task<string> GetEmailAsync(ApplicationUser user, CancellationToken cancellationToken = default);
        Task<bool> GetEmailConfirmedAsync(ApplicationUser user, CancellationToken cancellationToken = default);
        int GetHashCode();
        Task<bool> GetLockoutEnabledAsync(ApplicationUser user, CancellationToken cancellationToken = default);
        Task<DateTimeOffset?> GetLockoutEndDateAsync(ApplicationUser user, CancellationToken cancellationToken = default);
        Task<IList<UserLoginInfo>> GetLoginsAsync(ApplicationUser user, CancellationToken cancellationToken = default);
        Task<string> GetNormalizedEmailAsync(ApplicationUser user, CancellationToken cancellationToken = default);
        Task<string> GetNormalizedUserNameAsync(ApplicationUser user, CancellationToken cancellationToken = default);
        Task<string> GetPasswordHashAsync(ApplicationUser user, CancellationToken cancellationToken = default);
        Task<string> GetPhoneNumberAsync(ApplicationUser user, CancellationToken cancellationToken = default);
        Task<bool> GetPhoneNumberConfirmedAsync(ApplicationUser user, CancellationToken cancellationToken = default);
        Task<IList<string>> GetRolesAsync(ApplicationUser user, CancellationToken cancellationToken = default);
        Task<string> GetSecurityStampAsync(ApplicationUser user, CancellationToken cancellationToken = default);
        Task<string> GetTokenAsync(ApplicationUser user, string loginProvider, string name, CancellationToken cancellationToken);
        Task<bool> GetTwoFactorEnabledAsync(ApplicationUser user, CancellationToken cancellationToken = default);
        Task<string> GetUserIdAsync(ApplicationUser user, CancellationToken cancellationToken = default);
        Task<string> GetUserNameAsync(ApplicationUser user, CancellationToken cancellationToken = default);
        Task<IList<ApplicationUser>> GetUsersForClaimAsync(Claim claim, CancellationToken cancellationToken = default);
        Task<IList<ApplicationUser>> GetUsersInRoleAsync(string normalizedRoleName, CancellationToken cancellationToken = default);
        Task<bool> HasPasswordAsync(ApplicationUser user, CancellationToken cancellationToken = default);
        Task<int> IncrementAccessFailedCountAsync(ApplicationUser user, CancellationToken cancellationToken = default);
        Task<bool> IsInRoleAsync(ApplicationUser user, string normalizedRoleName, CancellationToken cancellationToken = default);
        Task<bool> RedeemCodeAsync(ApplicationUser user, string code, CancellationToken cancellationToken);
        Task RemoveClaimsAsync(ApplicationUser user, IEnumerable<Claim> claims, CancellationToken cancellationToken = default);
        Task RemoveFromRoleAsync(ApplicationUser user, string normalizedRoleName, CancellationToken cancellationToken = default);
        Task RemoveLoginAsync(ApplicationUser user, string loginProvider, string providerKey, CancellationToken cancellationToken = default);
        Task RemoveTokenAsync(ApplicationUser user, string loginProvider, string name, CancellationToken cancellationToken);
        Task ReplaceClaimAsync(ApplicationUser user, Claim claim, Claim newClaim, CancellationToken cancellationToken = default);
        Task ReplaceCodesAsync(ApplicationUser user, IEnumerable<string> recoveryCodes, CancellationToken cancellationToken);
        Task ResetAccessFailedCountAsync(ApplicationUser user, CancellationToken cancellationToken = default);
        Task SetAuthenticatorKeyAsync(ApplicationUser user, string key, CancellationToken cancellationToken);
        Task SetEmailAsync(ApplicationUser user, string email, CancellationToken cancellationToken = default);
        Task SetEmailConfirmedAsync(ApplicationUser user, bool confirmed, CancellationToken cancellationToken = default);
        Task SetLockoutEnabledAsync(ApplicationUser user, bool enabled, CancellationToken cancellationToken = default);
        Task SetLockoutEndDateAsync(ApplicationUser user, DateTimeOffset? lockoutEnd, CancellationToken cancellationToken = default);
        Task SetNormalizedEmailAsync(ApplicationUser user, string normalizedEmail, CancellationToken cancellationToken = default);
        Task SetNormalizedUserNameAsync(ApplicationUser user, string normalizedName, CancellationToken cancellationToken = default);
        Task SetPasswordHashAsync(ApplicationUser user, string passwordHash, CancellationToken cancellationToken = default);
        Task SetPhoneNumberAsync(ApplicationUser user, string phoneNumber, CancellationToken cancellationToken = default);
        Task SetPhoneNumberConfirmedAsync(ApplicationUser user, bool confirmed, CancellationToken cancellationToken = default);
        Task SetSecurityStampAsync(ApplicationUser user, string stamp, CancellationToken cancellationToken = default);
        Task SetTokenAsync(ApplicationUser user, string loginProvider, string name, string value, CancellationToken cancellationToken);
        Task SetTwoFactorEnabledAsync(ApplicationUser user, bool enabled, CancellationToken cancellationToken = default);
        Task SetUserNameAsync(ApplicationUser user, string userName, CancellationToken cancellationToken = default);
        string ToString();
        Task<IdentityResult> UpdateAsync(ApplicationUser user, CancellationToken cancellationToken = default);
    }
}