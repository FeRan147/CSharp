using Microsoft.AspNetCore.Identity;

namespace DomainInterfaces.Models
{
    public class User : IdentityUser<string>
    {
        public string Password { get; set; }
        public string Token { get; set; }
    }
}
