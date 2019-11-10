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
using DomainInterfaces.Interfaces;
using D = DomainInterfaces.Models;
using System.Net;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Logging;

namespace Api.Controllers
{
    [Authorize]
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IAccountService _accountService;
        private readonly ILogger _logger;

        public AccountController(
            IMapper mapper,
            IAccountService accountService,
            ILogger<AccountController> logger)
        {
            _mapper = mapper;
            _accountService = accountService;
            _logger = logger;
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<UserViewModel> Login([FromBody] UserViewModel userVM)
        {
            var result = await _accountService.LoginAsync(_mapper.Map<D.User>(userVM));

            Type type = result.GetType();

            if (type.Equals(typeof(string)))
            {
                userVM.Token = result.ToString();

                return userVM;
            }

            userVM.Error = result;

            return userVM;
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<UserViewModel> Register([FromBody] UserViewModel userVM)
        {
            var result = await _accountService.RegisterAsync(_mapper.Map<D.User>(userVM));

            Type type = result.GetType();

            if (type.Equals(typeof(string)))
            {
                userVM.Token = result.ToString();

                return userVM;
            }

            userVM.Error = result;

            return userVM;
        }

        
    }
}
