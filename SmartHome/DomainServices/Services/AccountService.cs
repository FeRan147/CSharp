using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using DomainInterfaces.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using I = InfrastructureInterfaces.Models;
using User = DomainInterfaces.Models.User;

namespace DomainServices.Services
{
    public class AccountService : IAccountService
    {
        private readonly IMapper _mapper;
        private readonly SignInManager<I.User> _signInManager;
        private readonly UserManager<I.User> _userManager;

        public AccountService(
            IMapper mapper,
            UserManager<I.User> userManager,
            SignInManager<I.User> signInManager)
        {
            _mapper = mapper;
            _userManager = userManager;
            _signInManager = signInManager;
        }

        public async Task<object> LoginAsync(User model, string jwtKey, string jwtIssuer, string jwtExpireDays)
        {
            var result = await _signInManager.PasswordSignInAsync(model.UserName, model.PasswordHash, false, false);

            if (result.Succeeded)
            {
                var appUser = _userManager.Users.SingleOrDefault(r => r.UserName == model.UserName);
                return GenerateJwtToken(model.Email, _mapper.Map<User>(appUser), jwtKey, jwtIssuer, jwtExpireDays);
            }

            return result;
        }

        public async Task<object> RegisterAsync(User model, string jwtKey, string jwtIssuer, string jwtExpireDays)
        {
            var user = new I.User
            {
                UserName = model.UserName,
                Email = model.Email
            };

            var result = await _userManager.CreateAsync(user, model.PasswordHash);

            if (result.Succeeded)
            {
                await _signInManager.SignInAsync(user, false);
                return GenerateJwtToken(model.Email, _mapper.Map<User>(user), jwtKey, jwtIssuer, jwtExpireDays);
            }

            return result.Errors;
        }

        private object GenerateJwtToken(string email, User user, string jwtKey, string jwtIssuer, string jwtExpireDays)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString())
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtKey));
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expires = DateTime.Now.AddDays(Convert.ToDouble(jwtExpireDays));

            var token = new JwtSecurityToken(
                jwtIssuer,
                jwtIssuer,
                claims,
                expires: expires,
                signingCredentials: credentials
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
