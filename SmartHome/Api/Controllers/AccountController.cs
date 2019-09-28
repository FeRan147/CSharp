using Api.Models;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using AIM = IdentityInterfaces.Models;
using IdentityInterfaces.Interfaces;

namespace Api.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IMapper _mapper;
        private readonly IApplicationSignInManager _signInManager;
        private readonly IApplicationUserManager _userManager;

        public AccountController(
            IConfiguration configuration,
            IMapper mapper,
            IApplicationUserManager userManager,
            IApplicationSignInManager signInManager)
        {
            _configuration = configuration;
            _mapper = mapper;
            _userManager = userManager;
            _signInManager = signInManager;
        }

        [HttpPost]
        public async Task<object> Login(UserViewModel userVM)
        {
            var result = await _signInManager.PasswordSignInAsync(userVM.UserName, userVM.PasswordHash, false, false);

            if (result.Succeeded)
            {
                var user = _userManager.Users.SingleOrDefault(r => r.UserName == userVM.UserName);
                return GenerateJwtToken(user);
            }

            return result;
        }

        [HttpPost]
        public async Task<object> Register(UserViewModel userVM)
        {
            var result = await _userManager.CreateAsync(_mapper.Map<AIM.ApplicationUser>(userVM));

            if (result.Succeeded)
            {
                await _signInManager.SignInAsync(_mapper.Map<AIM.ApplicationUser>(userVM), false);
                return GenerateJwtToken(_mapper.Map<AIM.ApplicationUser>(userVM));
            }

            return result.Errors;
        }

        private object GenerateJwtToken(AIM.ApplicationUser user)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.Email),
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
    }
}
