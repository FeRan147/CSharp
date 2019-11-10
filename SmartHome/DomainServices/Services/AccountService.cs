using DomainInterfaces.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using AutoMapper;
using Microsoft.Extensions.Configuration;
using System.Linq;
using System.Threading.Tasks;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using AIM = IdentityInterfaces.Models;
using IdentityInterfaces.Interfaces;
using DomainInterfaces.Models;
using Microsoft.Extensions.Logging;

namespace DomainServices.Services
{
    public class AccountService : IAccountService
    {
        private readonly IConfiguration _configuration;
        private readonly IMapper _mapper;
        private readonly IApplicationSignInManager _signInManager;
        private readonly IApplicationUserManager _userManager;
        private readonly ILogger _logger;

        public AccountService(
            IConfiguration configuration, 
            IMapper mapper,
            IApplicationUserManager userManager,
            IApplicationSignInManager signInManager,
            ILogger<AccountService> logger)
        {
            _configuration = configuration;
            _mapper = mapper;
            _userManager = userManager;
            _signInManager = signInManager;
            _logger = logger;
        }

        public async Task<object> LoginAsync(User user)
        {
            var result = await _signInManager.PasswordSignInAsync(user.UserName, user.Password, false, false);

            if (result.Succeeded)
            {
                var userLogin = _userManager.Users.SingleOrDefault(r => r.UserName == user.UserName);
                return GenerateJwtToken(userLogin);
            }

            return result;
        }

        public async Task<object> RegisterAsync(User user)
        {
            var userRegister = _mapper.Map<AIM.User>(user);

            userRegister.Id = Guid.NewGuid().ToString();

            var result = await _userManager.CreateAsync(userRegister, user.Password);

            if (result.Succeeded)
            {
                await _signInManager.SignInAsync(userRegister, false);
                return GenerateJwtToken(userRegister);
            }

            return result.Errors;
        }

        private object GenerateJwtToken(AIM.User user)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.UserName),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, user.Id)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration.GetSection("Identity")["JwtKey"]));
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expires = DateTime.Now.AddDays(Convert.ToDouble(_configuration.GetSection("Identity")["JwtExpireDays"]));

            var token = new JwtSecurityToken(
                _configuration.GetSection("Identity")["JwtIssuer"],
                _configuration.GetSection("Identity")["JwtIssuer"],
                claims,
                expires: expires,
                signingCredentials: credentials
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        public void Dispose()
        {

        }
    }
}
