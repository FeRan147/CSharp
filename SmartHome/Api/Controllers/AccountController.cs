using Api.Models;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DomainInterfaces.Interfaces;
using D = DomainInterfaces.Models;

namespace Api.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IAccountService _accountService;
        private readonly IMapper _mapper;

        public AccountController(IConfiguration configuration, IAccountService accountService, IMapper mapper)
        {
            _configuration = configuration;
            _accountService = accountService;
            _mapper = mapper;
        }

        [HttpPost]
        public async Task<object> Login([FromBody] UserViewModel model)
        {
            return await _accountService.LoginAsync(_mapper.Map<D.User>(model),
                _configuration.GetSection("Identity")[$"JwtKey"], 
                _configuration.GetSection("Identity")["JwtIssuer"], 
                _configuration.GetSection("Identity")["JwtExpireDays"]);
        }

        [HttpPost]
        public async Task<object> Register([FromBody] UserViewModel model)
        {
            return await _accountService.RegisterAsync(_mapper.Map<D.User>(model),
                _configuration.GetSection("Identity")["JwtKey"],
                _configuration.GetSection("Identity")["JwtIssuer"],
                _configuration.GetSection("Identity")["JwtExpireDays"]);
        }
    }
}
