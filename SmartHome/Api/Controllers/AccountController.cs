using Api.Models;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using DomainInterfaces.Interfaces;
using D = DomainInterfaces.Models;
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
        public async Task<UserViewModel> Login([FromBody] UserViewModel userVm)
        {
            var result = await _accountService.LoginAsync(_mapper.Map<D.User>(userVm));

            Type type = result.GetType();

            if (type == typeof(string))
            {
                userVm.Token = result.ToString();

                return userVm;
            }

            userVm.Error = result;

            return userVm;
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<UserViewModel> Register([FromBody] UserViewModel userVm)
        {
            var result = await _accountService.RegisterAsync(_mapper.Map<D.User>(userVm));

            var type = result.GetType();

            if (type == typeof(string))
            {
                userVm.Token = result.ToString();

                return userVm;
            }

            userVm.Error = result;

            return userVm;
        }

        
    }
}
