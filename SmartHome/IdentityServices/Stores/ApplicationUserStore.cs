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
    public class ApplicationUserStore : UserStore<ApplicationUser>, IApplicationUserStore
    {
        public ApplicationUserStore(DbContext context, IdentityErrorDescriber describer = null) : base(context, describer)
        {
        }

        public override IQueryable<ApplicationUser> Users => base.Users;

        public override Task AddClaimsAsync(ApplicationUser user, IEnumerable<Claim> claims, CancellationToken cancellationToken = default)
        {
            return base.AddClaimsAsync(user, claims, cancellationToken);
        }

        public override Task AddLoginAsync(ApplicationUser user, UserLoginInfo login, CancellationToken cancellationToken = default)
        {
            return base.AddLoginAsync(user, login, cancellationToken);
        }

        public override Task AddToRoleAsync(ApplicationUser user, string normalizedRoleName, CancellationToken cancellationToken = default)
        {
            return base.AddToRoleAsync(user, normalizedRoleName, cancellationToken);
        }

        public override string ConvertIdFromString(string id)
        {
            return base.ConvertIdFromString(id);
        }

        public override string ConvertIdToString(string id)
        {
            return base.ConvertIdToString(id);
        }

        public override Task<int> CountCodesAsync(ApplicationUser user, CancellationToken cancellationToken)
        {
            return base.CountCodesAsync(user, cancellationToken);
        }

        public override Task<IdentityResult> CreateAsync(ApplicationUser user, CancellationToken cancellationToken = default)
        {
            return base.CreateAsync(user, cancellationToken);
        }

        public override Task<IdentityResult> DeleteAsync(ApplicationUser user, CancellationToken cancellationToken = default)
        {
            return base.DeleteAsync(user, cancellationToken);
        }

        public override bool Equals(object obj)
        {
            return base.Equals(obj);
        }

        public override Task<ApplicationUser> FindByEmailAsync(string normalizedEmail, CancellationToken cancellationToken = default)
        {
            return base.FindByEmailAsync(normalizedEmail, cancellationToken);
        }

        public override Task<ApplicationUser> FindByIdAsync(string userId, CancellationToken cancellationToken = default)
        {
            return base.FindByIdAsync(userId, cancellationToken);
        }

        public override Task<ApplicationUser> FindByLoginAsync(string loginProvider, string providerKey, CancellationToken cancellationToken = default)
        {
            return base.FindByLoginAsync(loginProvider, providerKey, cancellationToken);
        }

        public override Task<ApplicationUser> FindByNameAsync(string normalizedUserName, CancellationToken cancellationToken = default)
        {
            return base.FindByNameAsync(normalizedUserName, cancellationToken);
        }

        public override Task<int> GetAccessFailedCountAsync(ApplicationUser user, CancellationToken cancellationToken = default)
        {
            return base.GetAccessFailedCountAsync(user, cancellationToken);
        }

        public override Task<string> GetAuthenticatorKeyAsync(ApplicationUser user, CancellationToken cancellationToken)
        {
            return base.GetAuthenticatorKeyAsync(user, cancellationToken);
        }

        public override Task<IList<Claim>> GetClaimsAsync(ApplicationUser user, CancellationToken cancellationToken = default)
        {
            return base.GetClaimsAsync(user, cancellationToken);
        }

        public override Task<string> GetEmailAsync(ApplicationUser user, CancellationToken cancellationToken = default)
        {
            return base.GetEmailAsync(user, cancellationToken);
        }

        public override Task<bool> GetEmailConfirmedAsync(ApplicationUser user, CancellationToken cancellationToken = default)
        {
            return base.GetEmailConfirmedAsync(user, cancellationToken);
        }

        public override int GetHashCode()
        {
            return base.GetHashCode();
        }

        public override Task<bool> GetLockoutEnabledAsync(ApplicationUser user, CancellationToken cancellationToken = default)
        {
            return base.GetLockoutEnabledAsync(user, cancellationToken);
        }

        public override Task<DateTimeOffset?> GetLockoutEndDateAsync(ApplicationUser user, CancellationToken cancellationToken = default)
        {
            return base.GetLockoutEndDateAsync(user, cancellationToken);
        }

        public override Task<IList<UserLoginInfo>> GetLoginsAsync(ApplicationUser user, CancellationToken cancellationToken = default)
        {
            return base.GetLoginsAsync(user, cancellationToken);
        }

        public override Task<string> GetNormalizedEmailAsync(ApplicationUser user, CancellationToken cancellationToken = default)
        {
            return base.GetNormalizedEmailAsync(user, cancellationToken);
        }

        public override Task<string> GetNormalizedUserNameAsync(ApplicationUser user, CancellationToken cancellationToken = default)
        {
            return base.GetNormalizedUserNameAsync(user, cancellationToken);
        }

        public override Task<string> GetPasswordHashAsync(ApplicationUser user, CancellationToken cancellationToken = default)
        {
            return base.GetPasswordHashAsync(user, cancellationToken);
        }

        public override Task<string> GetPhoneNumberAsync(ApplicationUser user, CancellationToken cancellationToken = default)
        {
            return base.GetPhoneNumberAsync(user, cancellationToken);
        }

        public override Task<bool> GetPhoneNumberConfirmedAsync(ApplicationUser user, CancellationToken cancellationToken = default)
        {
            return base.GetPhoneNumberConfirmedAsync(user, cancellationToken);
        }

        public override Task<IList<string>> GetRolesAsync(ApplicationUser user, CancellationToken cancellationToken = default)
        {
            return base.GetRolesAsync(user, cancellationToken);
        }

        public override Task<string> GetSecurityStampAsync(ApplicationUser user, CancellationToken cancellationToken = default)
        {
            return base.GetSecurityStampAsync(user, cancellationToken);
        }

        public override Task<string> GetTokenAsync(ApplicationUser user, string loginProvider, string name, CancellationToken cancellationToken)
        {
            return base.GetTokenAsync(user, loginProvider, name, cancellationToken);
        }

        public override Task<bool> GetTwoFactorEnabledAsync(ApplicationUser user, CancellationToken cancellationToken = default)
        {
            return base.GetTwoFactorEnabledAsync(user, cancellationToken);
        }

        public override Task<string> GetUserIdAsync(ApplicationUser user, CancellationToken cancellationToken = default)
        {
            return base.GetUserIdAsync(user, cancellationToken);
        }

        public override Task<string> GetUserNameAsync(ApplicationUser user, CancellationToken cancellationToken = default)
        {
            return base.GetUserNameAsync(user, cancellationToken);
        }

        public override Task<IList<ApplicationUser>> GetUsersForClaimAsync(Claim claim, CancellationToken cancellationToken = default)
        {
            return base.GetUsersForClaimAsync(claim, cancellationToken);
        }

        public override Task<IList<ApplicationUser>> GetUsersInRoleAsync(string normalizedRoleName, CancellationToken cancellationToken = default)
        {
            return base.GetUsersInRoleAsync(normalizedRoleName, cancellationToken);
        }

        public override Task<bool> HasPasswordAsync(ApplicationUser user, CancellationToken cancellationToken = default)
        {
            return base.HasPasswordAsync(user, cancellationToken);
        }

        public override Task<int> IncrementAccessFailedCountAsync(ApplicationUser user, CancellationToken cancellationToken = default)
        {
            return base.IncrementAccessFailedCountAsync(user, cancellationToken);
        }

        public override Task<bool> IsInRoleAsync(ApplicationUser user, string normalizedRoleName, CancellationToken cancellationToken = default)
        {
            return base.IsInRoleAsync(user, normalizedRoleName, cancellationToken);
        }

        public override Task<bool> RedeemCodeAsync(ApplicationUser user, string code, CancellationToken cancellationToken)
        {
            return base.RedeemCodeAsync(user, code, cancellationToken);
        }

        public override Task RemoveClaimsAsync(ApplicationUser user, IEnumerable<Claim> claims, CancellationToken cancellationToken = default)
        {
            return base.RemoveClaimsAsync(user, claims, cancellationToken);
        }

        public override Task RemoveFromRoleAsync(ApplicationUser user, string normalizedRoleName, CancellationToken cancellationToken = default)
        {
            return base.RemoveFromRoleAsync(user, normalizedRoleName, cancellationToken);
        }

        public override Task RemoveLoginAsync(ApplicationUser user, string loginProvider, string providerKey, CancellationToken cancellationToken = default)
        {
            return base.RemoveLoginAsync(user, loginProvider, providerKey, cancellationToken);
        }

        public override Task RemoveTokenAsync(ApplicationUser user, string loginProvider, string name, CancellationToken cancellationToken)
        {
            return base.RemoveTokenAsync(user, loginProvider, name, cancellationToken);
        }

        public override Task ReplaceClaimAsync(ApplicationUser user, Claim claim, Claim newClaim, CancellationToken cancellationToken = default)
        {
            return base.ReplaceClaimAsync(user, claim, newClaim, cancellationToken);
        }

        public override Task ReplaceCodesAsync(ApplicationUser user, IEnumerable<string> recoveryCodes, CancellationToken cancellationToken)
        {
            return base.ReplaceCodesAsync(user, recoveryCodes, cancellationToken);
        }

        public override Task ResetAccessFailedCountAsync(ApplicationUser user, CancellationToken cancellationToken = default)
        {
            return base.ResetAccessFailedCountAsync(user, cancellationToken);
        }

        public override Task SetAuthenticatorKeyAsync(ApplicationUser user, string key, CancellationToken cancellationToken)
        {
            return base.SetAuthenticatorKeyAsync(user, key, cancellationToken);
        }

        public override Task SetEmailAsync(ApplicationUser user, string email, CancellationToken cancellationToken = default)
        {
            return base.SetEmailAsync(user, email, cancellationToken);
        }

        public override Task SetEmailConfirmedAsync(ApplicationUser user, bool confirmed, CancellationToken cancellationToken = default)
        {
            return base.SetEmailConfirmedAsync(user, confirmed, cancellationToken);
        }

        public override Task SetLockoutEnabledAsync(ApplicationUser user, bool enabled, CancellationToken cancellationToken = default)
        {
            return base.SetLockoutEnabledAsync(user, enabled, cancellationToken);
        }

        public override Task SetLockoutEndDateAsync(ApplicationUser user, DateTimeOffset? lockoutEnd, CancellationToken cancellationToken = default)
        {
            return base.SetLockoutEndDateAsync(user, lockoutEnd, cancellationToken);
        }

        public override Task SetNormalizedEmailAsync(ApplicationUser user, string normalizedEmail, CancellationToken cancellationToken = default)
        {
            return base.SetNormalizedEmailAsync(user, normalizedEmail, cancellationToken);
        }

        public override Task SetNormalizedUserNameAsync(ApplicationUser user, string normalizedName, CancellationToken cancellationToken = default)
        {
            return base.SetNormalizedUserNameAsync(user, normalizedName, cancellationToken);
        }

        public override Task SetPasswordHashAsync(ApplicationUser user, string passwordHash, CancellationToken cancellationToken = default)
        {
            return base.SetPasswordHashAsync(user, passwordHash, cancellationToken);
        }

        public override Task SetPhoneNumberAsync(ApplicationUser user, string phoneNumber, CancellationToken cancellationToken = default)
        {
            return base.SetPhoneNumberAsync(user, phoneNumber, cancellationToken);
        }

        public override Task SetPhoneNumberConfirmedAsync(ApplicationUser user, bool confirmed, CancellationToken cancellationToken = default)
        {
            return base.SetPhoneNumberConfirmedAsync(user, confirmed, cancellationToken);
        }

        public override Task SetSecurityStampAsync(ApplicationUser user, string stamp, CancellationToken cancellationToken = default)
        {
            return base.SetSecurityStampAsync(user, stamp, cancellationToken);
        }

        public override Task SetTokenAsync(ApplicationUser user, string loginProvider, string name, string value, CancellationToken cancellationToken)
        {
            return base.SetTokenAsync(user, loginProvider, name, value, cancellationToken);
        }

        public override Task SetTwoFactorEnabledAsync(ApplicationUser user, bool enabled, CancellationToken cancellationToken = default)
        {
            return base.SetTwoFactorEnabledAsync(user, enabled, cancellationToken);
        }

        public override Task SetUserNameAsync(ApplicationUser user, string userName, CancellationToken cancellationToken = default)
        {
            return base.SetUserNameAsync(user, userName, cancellationToken);
        }

        public override string ToString()
        {
            return base.ToString();
        }

        public override Task<IdentityResult> UpdateAsync(ApplicationUser user, CancellationToken cancellationToken = default)
        {
            return base.UpdateAsync(user, cancellationToken);
        }

        protected override Task AddUserTokenAsync(IdentityUserToken<string> token)
        {
            return base.AddUserTokenAsync(token);
        }

        protected override IdentityUserClaim<string> CreateUserClaim(ApplicationUser user, Claim claim)
        {
            return base.CreateUserClaim(user, claim);
        }

        protected override IdentityUserLogin<string> CreateUserLogin(ApplicationUser user, UserLoginInfo login)
        {
            return base.CreateUserLogin(user, login);
        }

        protected override IdentityUserRole<string> CreateUserRole(ApplicationUser user, IdentityRole role)
        {
            return base.CreateUserRole(user, role);
        }

        protected override IdentityUserToken<string> CreateUserToken(ApplicationUser user, string loginProvider, string name, string value)
        {
            return base.CreateUserToken(user, loginProvider, name, value);
        }

        protected override Task<IdentityRole> FindRoleAsync(string normalizedRoleName, CancellationToken cancellationToken)
        {
            return base.FindRoleAsync(normalizedRoleName, cancellationToken);
        }

        protected override Task<IdentityUserToken<string>> FindTokenAsync(ApplicationUser user, string loginProvider, string name, CancellationToken cancellationToken)
        {
            return base.FindTokenAsync(user, loginProvider, name, cancellationToken);
        }

        protected override Task<ApplicationUser> FindUserAsync(string userId, CancellationToken cancellationToken)
        {
            return base.FindUserAsync(userId, cancellationToken);
        }

        protected override Task<IdentityUserLogin<string>> FindUserLoginAsync(string userId, string loginProvider, string providerKey, CancellationToken cancellationToken)
        {
            return base.FindUserLoginAsync(userId, loginProvider, providerKey, cancellationToken);
        }

        protected override Task<IdentityUserLogin<string>> FindUserLoginAsync(string loginProvider, string providerKey, CancellationToken cancellationToken)
        {
            return base.FindUserLoginAsync(loginProvider, providerKey, cancellationToken);
        }

        protected override Task<IdentityUserRole<string>> FindUserRoleAsync(string userId, string roleId, CancellationToken cancellationToken)
        {
            return base.FindUserRoleAsync(userId, roleId, cancellationToken);
        }

        protected override Task RemoveUserTokenAsync(IdentityUserToken<string> token)
        {
            return base.RemoveUserTokenAsync(token);
        }
    }
}
