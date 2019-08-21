using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Project.Domain.Interfaces;
using Project.WebApi.Models;
using D = Project.Domain.Models;

namespace Project.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IUserService _userService;

        public UserController(IMapper mapper, IUserService userService)
        {
            _mapper = mapper;
            _userService = userService;
        }

        [HttpGet("{includeDevices}")]
        public async Task<IEnumerable<User>> GetAsync(bool includeDevices)
        {
            var users = await _userService.GetUsersAsync(includeDevices);

            return users.Select(item =>
            {
                var entity = _mapper.Map<User>(item);
                return entity;
            }).ToList();
        }

        [HttpGet("{id}/{includeDevices}")]
        public async Task<User> GetAsync(int id, bool includeDevices)
        {
            var user = await _userService.GetUserAsync(id, includeDevices);
            return _mapper.Map<User>(user);
        }

        [HttpPost]
        public async Task PostAsync([FromBody] User user)
        {
            await _userService.SaveUserAsync(null, _mapper.Map<D.User>(user));
        }

        [HttpPut("{id}")]
        public async Task PutAsync(int id, [FromBody] User user)
        {
            await _userService.SaveUserAsync(id, _mapper.Map<D.User>(user));
        }

        [HttpDelete("{id}")]
        public async Task DeleteAsync(int id)
        {
            await _userService.DeleteUserAsync(id);
        }
    }
}
