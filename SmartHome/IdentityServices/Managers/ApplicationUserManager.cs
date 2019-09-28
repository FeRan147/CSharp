using IdentityInterfaces.Interfaces;
using IdentityInterfaces.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace IdentityServices.Managers
{
    public class ApplicationUserManager : UserManager<ApplicationUser>, IApplicationUserManager
    {
        public ApplicationUserManager(IUserStore<ApplicationUser> store, IOptions<IdentityOptions> optionsAccessor, IPasswordHasher<ApplicationUser> passwordHasher, IEnumerable<IUserValidator<ApplicationUser>> userValidators, IEnumerable<IPasswordValidator<ApplicationUser>> passwordValidators, ILookupNormalizer keyNormalizer, IdentityErrorDescriber errors, IServiceProvider services, ILogger<UserManager<ApplicationUser>> logger) : base(store, optionsAccessor, passwordHasher, userValidators, passwordValidators, keyNormalizer, errors, services, logger)
        {
        }

        public override ILogger Logger { get => base.Logger; set => base.Logger = value; }

        public override bool SupportsUserAuthenticationTokens => base.SupportsUserAuthenticationTokens;

        public override bool SupportsUserAuthenticatorKey => base.SupportsUserAuthenticatorKey;

        public override bool SupportsUserTwoFactorRecoveryCodes => base.SupportsUserTwoFactorRecoveryCodes;

        public override bool SupportsUserTwoFactor => base.SupportsUserTwoFactor;

        public override bool SupportsUserPassword => base.SupportsUserPassword;

        public override bool SupportsUserSecurityStamp => base.SupportsUserSecurityStamp;

        public override bool SupportsUserRole => base.SupportsUserRole;

        public override bool SupportsUserLogin => base.SupportsUserLogin;

        public override bool SupportsUserEmail => base.SupportsUserEmail;

        public override bool SupportsUserPhoneNumber => base.SupportsUserPhoneNumber;

        public override bool SupportsUserClaim => base.SupportsUserClaim;

        public override bool SupportsUserLockout => base.SupportsUserLockout;

        public override bool SupportsQueryableUsers => base.SupportsQueryableUsers;

        public override IQueryable<ApplicationUser> Users => base.Users;

        protected override CancellationToken CancellationToken => base.CancellationToken;

        public override Task<IdentityResult> AccessFailedAsync(ApplicationUser user)
        {
            return base.AccessFailedAsync(user);
        }

        public override Task<IdentityResult> AddClaimAsync(ApplicationUser user, Claim claim)
        {
            return base.AddClaimAsync(user, claim);
        }

        public override Task<IdentityResult> AddClaimsAsync(ApplicationUser user, IEnumerable<Claim> claims)
        {
            return base.AddClaimsAsync(user, claims);
        }

        public override Task<IdentityResult> AddLoginAsync(ApplicationUser user, UserLoginInfo login)
        {
            return base.AddLoginAsync(user, login);
        }

        public override Task<IdentityResult> AddPasswordAsync(ApplicationUser user, string password)
        {
            return base.AddPasswordAsync(user, password);
        }

        public override Task<IdentityResult> AddToRoleAsync(ApplicationUser user, string role)
        {
            return base.AddToRoleAsync(user, role);
        }

        public override Task<IdentityResult> AddToRolesAsync(ApplicationUser user, IEnumerable<string> roles)
        {
            return base.AddToRolesAsync(user, roles);
        }

        public override Task<IdentityResult> ChangeEmailAsync(ApplicationUser user, string newEmail, string token)
        {
            return base.ChangeEmailAsync(user, newEmail, token);
        }

        public override Task<IdentityResult> ChangePasswordAsync(ApplicationUser user, string currentPassword, string newPassword)
        {
            return base.ChangePasswordAsync(user, currentPassword, newPassword);
        }

        public override Task<IdentityResult> ChangePhoneNumberAsync(ApplicationUser user, string phoneNumber, string token)
        {
            return base.ChangePhoneNumberAsync(user, phoneNumber, token);
        }

        public override Task<bool> CheckPasswordAsync(ApplicationUser user, string password)
        {
            return base.CheckPasswordAsync(user, password);
        }

        public override Task<IdentityResult> ConfirmEmailAsync(ApplicationUser user, string token)
        {
            return base.ConfirmEmailAsync(user, token);
        }

        public override Task<int> CountRecoveryCodesAsync(ApplicationUser user)
        {
            return base.CountRecoveryCodesAsync(user);
        }

        public override Task<IdentityResult> CreateAsync(ApplicationUser user)
        {
            return base.CreateAsync(user);
        }

        public override Task<IdentityResult> CreateAsync(ApplicationUser user, string password)
        {
            return base.CreateAsync(user, password);
        }

        public override Task<byte[]> CreateSecurityTokenAsync(ApplicationUser user)
        {
            return base.CreateSecurityTokenAsync(user);
        }

        public override Task<IdentityResult> DeleteAsync(ApplicationUser user)
        {
            return base.DeleteAsync(user);
        }

        public override bool Equals(object obj)
        {
            return base.Equals(obj);
        }

        public override Task<ApplicationUser> FindByEmailAsync(string email)
        {
            return base.FindByEmailAsync(email);
        }

        public override Task<ApplicationUser> FindByIdAsync(string userId)
        {
            return base.FindByIdAsync(userId);
        }

        public override Task<ApplicationUser> FindByLoginAsync(string loginProvider, string providerKey)
        {
            return base.FindByLoginAsync(loginProvider, providerKey);
        }

        public override Task<ApplicationUser> FindByNameAsync(string userName)
        {
            return base.FindByNameAsync(userName);
        }

        public override Task<string> GenerateChangeEmailTokenAsync(ApplicationUser user, string newEmail)
        {
            return base.GenerateChangeEmailTokenAsync(user, newEmail);
        }

        public override Task<string> GenerateChangePhoneNumberTokenAsync(ApplicationUser user, string phoneNumber)
        {
            return base.GenerateChangePhoneNumberTokenAsync(user, phoneNumber);
        }

        public override Task<string> GenerateConcurrencyStampAsync(ApplicationUser user)
        {
            return base.GenerateConcurrencyStampAsync(user);
        }

        public override Task<string> GenerateEmailConfirmationTokenAsync(ApplicationUser user)
        {
            return base.GenerateEmailConfirmationTokenAsync(user);
        }

        public override string GenerateNewAuthenticatorKey()
        {
            return base.GenerateNewAuthenticatorKey();
        }

        public override Task<IEnumerable<string>> GenerateNewTwoFactorRecoveryCodesAsync(ApplicationUser user, int number)
        {
            return base.GenerateNewTwoFactorRecoveryCodesAsync(user, number);
        }

        public override Task<string> GeneratePasswordResetTokenAsync(ApplicationUser user)
        {
            return base.GeneratePasswordResetTokenAsync(user);
        }

        public override Task<string> GenerateTwoFactorTokenAsync(ApplicationUser user, string tokenProvider)
        {
            return base.GenerateTwoFactorTokenAsync(user, tokenProvider);
        }

        public override Task<string> GenerateUserTokenAsync(ApplicationUser user, string tokenProvider, string purpose)
        {
            return base.GenerateUserTokenAsync(user, tokenProvider, purpose);
        }

        public override Task<int> GetAccessFailedCountAsync(ApplicationUser user)
        {
            return base.GetAccessFailedCountAsync(user);
        }

        public override Task<string> GetAuthenticationTokenAsync(ApplicationUser user, string loginProvider, string tokenName)
        {
            return base.GetAuthenticationTokenAsync(user, loginProvider, tokenName);
        }

        public override Task<string> GetAuthenticatorKeyAsync(ApplicationUser user)
        {
            return base.GetAuthenticatorKeyAsync(user);
        }

        public override Task<IList<Claim>> GetClaimsAsync(ApplicationUser user)
        {
            return base.GetClaimsAsync(user);
        }

        public override Task<string> GetEmailAsync(ApplicationUser user)
        {
            return base.GetEmailAsync(user);
        }

        public override int GetHashCode()
        {
            return base.GetHashCode();
        }

        public override Task<bool> GetLockoutEnabledAsync(ApplicationUser user)
        {
            return base.GetLockoutEnabledAsync(user);
        }

        public override Task<DateTimeOffset?> GetLockoutEndDateAsync(ApplicationUser user)
        {
            return base.GetLockoutEndDateAsync(user);
        }

        public override Task<IList<UserLoginInfo>> GetLoginsAsync(ApplicationUser user)
        {
            return base.GetLoginsAsync(user);
        }

        public override Task<string> GetPhoneNumberAsync(ApplicationUser user)
        {
            return base.GetPhoneNumberAsync(user);
        }

        public override Task<IList<string>> GetRolesAsync(ApplicationUser user)
        {
            return base.GetRolesAsync(user);
        }

        public override Task<string> GetSecurityStampAsync(ApplicationUser user)
        {
            return base.GetSecurityStampAsync(user);
        }

        public override Task<bool> GetTwoFactorEnabledAsync(ApplicationUser user)
        {
            return base.GetTwoFactorEnabledAsync(user);
        }

        public override Task<ApplicationUser> GetUserAsync(ClaimsPrincipal principal)
        {
            return base.GetUserAsync(principal);
        }

        public override string GetUserId(ClaimsPrincipal principal)
        {
            return base.GetUserId(principal);
        }

        public override Task<string> GetUserIdAsync(ApplicationUser user)
        {
            return base.GetUserIdAsync(user);
        }

        public override string GetUserName(ClaimsPrincipal principal)
        {
            return base.GetUserName(principal);
        }

        public override Task<string> GetUserNameAsync(ApplicationUser user)
        {
            return base.GetUserNameAsync(user);
        }

        public override Task<IList<ApplicationUser>> GetUsersForClaimAsync(Claim claim)
        {
            return base.GetUsersForClaimAsync(claim);
        }

        public override Task<IList<ApplicationUser>> GetUsersInRoleAsync(string roleName)
        {
            return base.GetUsersInRoleAsync(roleName);
        }

        public override Task<IList<string>> GetValidTwoFactorProvidersAsync(ApplicationUser user)
        {
            return base.GetValidTwoFactorProvidersAsync(user);
        }

        public override Task<bool> HasPasswordAsync(ApplicationUser user)
        {
            return base.HasPasswordAsync(user);
        }

        public override Task<bool> IsEmailConfirmedAsync(ApplicationUser user)
        {
            return base.IsEmailConfirmedAsync(user);
        }

        public override Task<bool> IsInRoleAsync(ApplicationUser user, string role)
        {
            return base.IsInRoleAsync(user, role);
        }

        public override Task<bool> IsLockedOutAsync(ApplicationUser user)
        {
            return base.IsLockedOutAsync(user);
        }

        public override Task<bool> IsPhoneNumberConfirmedAsync(ApplicationUser user)
        {
            return base.IsPhoneNumberConfirmedAsync(user);
        }

        public override string NormalizeKey(string key)
        {
            return base.NormalizeKey(key);
        }

        public override Task<IdentityResult> RedeemTwoFactorRecoveryCodeAsync(ApplicationUser user, string code)
        {
            return base.RedeemTwoFactorRecoveryCodeAsync(user, code);
        }

        public override void RegisterTokenProvider(string providerName, IUserTwoFactorTokenProvider<ApplicationUser> provider)
        {
            base.RegisterTokenProvider(providerName, provider);
        }

        public override Task<IdentityResult> RemoveAuthenticationTokenAsync(ApplicationUser user, string loginProvider, string tokenName)
        {
            return base.RemoveAuthenticationTokenAsync(user, loginProvider, tokenName);
        }

        public override Task<IdentityResult> RemoveClaimAsync(ApplicationUser user, Claim claim)
        {
            return base.RemoveClaimAsync(user, claim);
        }

        public override Task<IdentityResult> RemoveClaimsAsync(ApplicationUser user, IEnumerable<Claim> claims)
        {
            return base.RemoveClaimsAsync(user, claims);
        }

        public override Task<IdentityResult> RemoveFromRoleAsync(ApplicationUser user, string role)
        {
            return base.RemoveFromRoleAsync(user, role);
        }

        public override Task<IdentityResult> RemoveFromRolesAsync(ApplicationUser user, IEnumerable<string> roles)
        {
            return base.RemoveFromRolesAsync(user, roles);
        }

        public override Task<IdentityResult> RemoveLoginAsync(ApplicationUser user, string loginProvider, string providerKey)
        {
            return base.RemoveLoginAsync(user, loginProvider, providerKey);
        }

        public override Task<IdentityResult> RemovePasswordAsync(ApplicationUser user)
        {
            return base.RemovePasswordAsync(user);
        }

        public override Task<IdentityResult> ReplaceClaimAsync(ApplicationUser user, Claim claim, Claim newClaim)
        {
            return base.ReplaceClaimAsync(user, claim, newClaim);
        }

        public override Task<IdentityResult> ResetAccessFailedCountAsync(ApplicationUser user)
        {
            return base.ResetAccessFailedCountAsync(user);
        }

        public override Task<IdentityResult> ResetAuthenticatorKeyAsync(ApplicationUser user)
        {
            return base.ResetAuthenticatorKeyAsync(user);
        }

        public override Task<IdentityResult> ResetPasswordAsync(ApplicationUser user, string token, string newPassword)
        {
            return base.ResetPasswordAsync(user, token, newPassword);
        }

        public override Task<IdentityResult> SetAuthenticationTokenAsync(ApplicationUser user, string loginProvider, string tokenName, string tokenValue)
        {
            return base.SetAuthenticationTokenAsync(user, loginProvider, tokenName, tokenValue);
        }

        public override Task<IdentityResult> SetEmailAsync(ApplicationUser user, string email)
        {
            return base.SetEmailAsync(user, email);
        }

        public override Task<IdentityResult> SetLockoutEnabledAsync(ApplicationUser user, bool enabled)
        {
            return base.SetLockoutEnabledAsync(user, enabled);
        }

        public override Task<IdentityResult> SetLockoutEndDateAsync(ApplicationUser user, DateTimeOffset? lockoutEnd)
        {
            return base.SetLockoutEndDateAsync(user, lockoutEnd);
        }

        public override Task<IdentityResult> SetPhoneNumberAsync(ApplicationUser user, string phoneNumber)
        {
            return base.SetPhoneNumberAsync(user, phoneNumber);
        }

        public override Task<IdentityResult> SetTwoFactorEnabledAsync(ApplicationUser user, bool enabled)
        {
            return base.SetTwoFactorEnabledAsync(user, enabled);
        }

        public override Task<IdentityResult> SetUserNameAsync(ApplicationUser user, string userName)
        {
            return base.SetUserNameAsync(user, userName);
        }

        public override string ToString()
        {
            return base.ToString();
        }

        public override Task<IdentityResult> UpdateAsync(ApplicationUser user)
        {
            return base.UpdateAsync(user);
        }

        public override Task UpdateNormalizedEmailAsync(ApplicationUser user)
        {
            return base.UpdateNormalizedEmailAsync(user);
        }

        public override Task UpdateNormalizedUserNameAsync(ApplicationUser user)
        {
            return base.UpdateNormalizedUserNameAsync(user);
        }

        public override Task<IdentityResult> UpdateSecurityStampAsync(ApplicationUser user)
        {
            return base.UpdateSecurityStampAsync(user);
        }

        public override Task<bool> VerifyChangePhoneNumberTokenAsync(ApplicationUser user, string token, string phoneNumber)
        {
            return base.VerifyChangePhoneNumberTokenAsync(user, token, phoneNumber);
        }

        public override Task<bool> VerifyTwoFactorTokenAsync(ApplicationUser user, string tokenProvider, string token)
        {
            return base.VerifyTwoFactorTokenAsync(user, tokenProvider, token);
        }

        public override Task<bool> VerifyUserTokenAsync(ApplicationUser user, string tokenProvider, string purpose, string token)
        {
            return base.VerifyUserTokenAsync(user, tokenProvider, purpose, token);
        }

        protected override string CreateTwoFactorRecoveryCode()
        {
            return base.CreateTwoFactorRecoveryCode();
        }

        protected override void Dispose(bool disposing)
        {
            base.Dispose(disposing);
        }

        protected override Task<IdentityResult> UpdatePasswordHash(ApplicationUser user, string newPassword, bool validatePassword)
        {
            return base.UpdatePasswordHash(user, newPassword, validatePassword);
        }

        protected override Task<IdentityResult> UpdateUserAsync(ApplicationUser user)
        {
            return base.UpdateUserAsync(user);
        }

        protected override Task<PasswordVerificationResult> VerifyPasswordAsync(IUserPasswordStore<ApplicationUser> store, ApplicationUser user, string password)
        {
            return base.VerifyPasswordAsync(store, user, password);
        }
    }
}
