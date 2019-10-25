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
        IQueryable<User> Users { get; }

        Task AddClaimsAsync(User user, IEnumerable<Claim> claims, CancellationToken cancellationToken = default);
        Task AddLoginAsync(User user, UserLoginInfo login, CancellationToken cancellationToken = default);
        Task AddToRoleAsync(User user, string normalizedRoleName, CancellationToken cancellationToken = default);
        string ConvertIdFromString(string id);
        string ConvertIdToString(string id);
        Task<int> CountCodesAsync(User user, CancellationToken cancellationToken);
        Task<IdentityResult> CreateAsync(User user, CancellationToken cancellationToken = default);
        Task<IdentityResult> DeleteAsync(User user, CancellationToken cancellationToken = default);
        bool Equals(object obj);
        Task<User> FindByEmailAsync(string normalizedEmail, CancellationToken cancellationToken = default);
        Task<User> FindByIdAsync(string userId, CancellationToken cancellationToken = default);
        Task<User> FindByLoginAsync(string loginProvider, string providerKey, CancellationToken cancellationToken = default);
        Task<User> FindByNameAsync(string normalizedUserName, CancellationToken cancellationToken = default);
        Task<int> GetAccessFailedCountAsync(User user, CancellationToken cancellationToken = default);
        Task<string> GetAuthenticatorKeyAsync(User user, CancellationToken cancellationToken);
        Task<IList<Claim>> GetClaimsAsync(User user, CancellationToken cancellationToken = default);
        Task<string> GetEmailAsync(User user, CancellationToken cancellationToken = default);
        Task<bool> GetEmailConfirmedAsync(User user, CancellationToken cancellationToken = default);
        int GetHashCode();
        Task<bool> GetLockoutEnabledAsync(User user, CancellationToken cancellationToken = default);
        Task<DateTimeOffset?> GetLockoutEndDateAsync(User user, CancellationToken cancellationToken = default);
        Task<IList<UserLoginInfo>> GetLoginsAsync(User user, CancellationToken cancellationToken = default);
        Task<string> GetNormalizedEmailAsync(User user, CancellationToken cancellationToken = default);
        Task<string> GetNormalizedUserNameAsync(User user, CancellationToken cancellationToken = default);
        Task<string> GetPasswordHashAsync(User user, CancellationToken cancellationToken = default);
        Task<string> GetPhoneNumberAsync(User user, CancellationToken cancellationToken = default);
        Task<bool> GetPhoneNumberConfirmedAsync(User user, CancellationToken cancellationToken = default);
        Task<IList<string>> GetRolesAsync(User user, CancellationToken cancellationToken = default);
        Task<string> GetSecurityStampAsync(User user, CancellationToken cancellationToken = default);
        Task<string> GetTokenAsync(User user, string loginProvider, string name, CancellationToken cancellationToken);
        Task<bool> GetTwoFactorEnabledAsync(User user, CancellationToken cancellationToken = default);
        Task<string> GetUserIdAsync(User user, CancellationToken cancellationToken = default);
        Task<string> GetUserNameAsync(User user, CancellationToken cancellationToken = default);
        Task<IList<User>> GetUsersForClaimAsync(Claim claim, CancellationToken cancellationToken = default);
        Task<IList<User>> GetUsersInRoleAsync(string normalizedRoleName, CancellationToken cancellationToken = default);
        Task<bool> HasPasswordAsync(User user, CancellationToken cancellationToken = default);
        Task<int> IncrementAccessFailedCountAsync(User user, CancellationToken cancellationToken = default);
        Task<bool> IsInRoleAsync(User user, string normalizedRoleName, CancellationToken cancellationToken = default);
        Task<bool> RedeemCodeAsync(User user, string code, CancellationToken cancellationToken);
        Task RemoveClaimsAsync(User user, IEnumerable<Claim> claims, CancellationToken cancellationToken = default);
        Task RemoveFromRoleAsync(User user, string normalizedRoleName, CancellationToken cancellationToken = default);
        Task RemoveLoginAsync(User user, string loginProvider, string providerKey, CancellationToken cancellationToken = default);
        Task RemoveTokenAsync(User user, string loginProvider, string name, CancellationToken cancellationToken);
        Task ReplaceClaimAsync(User user, Claim claim, Claim newClaim, CancellationToken cancellationToken = default);
        Task ReplaceCodesAsync(User user, IEnumerable<string> recoveryCodes, CancellationToken cancellationToken);
        Task ResetAccessFailedCountAsync(User user, CancellationToken cancellationToken = default);
        Task SetAuthenticatorKeyAsync(User user, string key, CancellationToken cancellationToken);
        Task SetEmailAsync(User user, string email, CancellationToken cancellationToken = default);
        Task SetEmailConfirmedAsync(User user, bool confirmed, CancellationToken cancellationToken = default);
        Task SetLockoutEnabledAsync(User user, bool enabled, CancellationToken cancellationToken = default);
        Task SetLockoutEndDateAsync(User user, DateTimeOffset? lockoutEnd, CancellationToken cancellationToken = default);
        Task SetNormalizedEmailAsync(User user, string normalizedEmail, CancellationToken cancellationToken = default);
        Task SetNormalizedUserNameAsync(User user, string normalizedName, CancellationToken cancellationToken = default);
        Task SetPasswordHashAsync(User user, string passwordHash, CancellationToken cancellationToken = default);
        Task SetPhoneNumberAsync(User user, string phoneNumber, CancellationToken cancellationToken = default);
        Task SetPhoneNumberConfirmedAsync(User user, bool confirmed, CancellationToken cancellationToken = default);
        Task SetSecurityStampAsync(User user, string stamp, CancellationToken cancellationToken = default);
        Task SetTokenAsync(User user, string loginProvider, string name, string value, CancellationToken cancellationToken);
        Task SetTwoFactorEnabledAsync(User user, bool enabled, CancellationToken cancellationToken = default);
        Task SetUserNameAsync(User user, string userName, CancellationToken cancellationToken = default);
        string ToString();
        Task<IdentityResult> UpdateAsync(User user, CancellationToken cancellationToken = default);
    }
}