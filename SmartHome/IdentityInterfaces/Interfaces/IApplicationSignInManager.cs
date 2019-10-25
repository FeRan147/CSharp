using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using IdentityInterfaces.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;

namespace IdentityInterfaces.Interfaces
{
    public interface IApplicationSignInManager
    {
        ILogger Logger { get; set; }

        Task<bool> CanSignInAsync(User user);
        Task<SignInResult> CheckPasswordSignInAsync(User user, string password, bool lockoutOnFailure);
        AuthenticationProperties ConfigureExternalAuthenticationProperties(string provider, string redirectUrl, string userId = null);
        Task<ClaimsPrincipal> CreateUserPrincipalAsync(User user);
        bool Equals(object obj);
        Task<SignInResult> ExternalLoginSignInAsync(string loginProvider, string providerKey, bool isPersistent);
        Task<SignInResult> ExternalLoginSignInAsync(string loginProvider, string providerKey, bool isPersistent, bool bypassTwoFactor);
        Task ForgetTwoFactorClientAsync();
        Task<IEnumerable<AuthenticationScheme>> GetExternalAuthenticationSchemesAsync();
        Task<ExternalLoginInfo> GetExternalLoginInfoAsync(string expectedXsrf = null);
        int GetHashCode();
        Task<User> GetTwoFactorAuthenticationUserAsync();
        bool IsSignedIn(ClaimsPrincipal principal);
        Task<bool> IsTwoFactorClientRememberedAsync(User user);
        Task<SignInResult> PasswordSignInAsync(User user, string password, bool isPersistent, bool lockoutOnFailure);
        Task<SignInResult> PasswordSignInAsync(string userName, string password, bool isPersistent, bool lockoutOnFailure);
        Task RefreshSignInAsync(User user);
        Task RememberTwoFactorClientAsync(User user);
        Task SignInAsync(User user, AuthenticationProperties authenticationProperties, string authenticationMethod = null);
        Task SignInAsync(User user, bool isPersistent, string authenticationMethod = null);
        Task SignOutAsync();
        string ToString();
        Task<SignInResult> TwoFactorAuthenticatorSignInAsync(string code, bool isPersistent, bool rememberClient);
        Task<SignInResult> TwoFactorRecoveryCodeSignInAsync(string recoveryCode);
        Task<SignInResult> TwoFactorSignInAsync(string provider, string code, bool isPersistent, bool rememberClient);
        Task<IdentityResult> UpdateExternalAuthenticationTokensAsync(ExternalLoginInfo externalLogin);
        Task<bool> ValidateSecurityStampAsync(User user, string securityStamp);
        Task<User> ValidateSecurityStampAsync(ClaimsPrincipal principal);
        Task<User> ValidateTwoFactorSecurityStampAsync(ClaimsPrincipal principal);
    }
}