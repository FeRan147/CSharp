using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Project.Domain.Interfaces;
using Project.WebApi.Interfaces;
using Project.WebApi.Models;
using D = Project.Domain.Models;

namespace Project.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase, IBaseController<User>
    {
        private readonly IMapper _mapper;
        private readonly IUserService _userService;

        public UsersController(IMapper mapper, IUserService userService)
        {
            _mapper = mapper;
            _userService = userService;
        }

        [HttpGet("{includeDevices:bool}")]
        public async Task<IEnumerable<User>> GetAllAsync(bool includeDevices)
        {
            var users = await _userService.GetAllAsync(includeDevices);

            return users.Select(item =>
                {
                    var entity = _mapper.Map<User>(item);
                    return entity;
                }).ToList();
        }

        [HttpGet("{id:int}/{includeDevices:bool}")]
        public async Task<User> GetAsync(int id, bool includeDevices)
        {
            var user = await _userService.GetAsync(id, includeDevices);
            return _mapper.Map<User>(user);
        }

        [HttpGet("{currentPage:int}/{onPage:int}")]
        public async Task<IList<User>> GetPagedAsync(int currentPage, int onPage)
        {
            var pagedUsers = await _userService.GetPagedAsync(currentPage, onPage);
            return pagedUsers.Select(item =>
            {
                var entity = _mapper.Map<User>(item);
                return entity;
            }).ToList();
        }

        [HttpPost]
        public async Task PostAsync([FromBody] User user)
        {
            await _userService.SaveAsync(null, _mapper.Map<D.User>(user));
        }

        [HttpPut("{id:int}")]
        public async Task PutAsync(int id, [FromBody] User user)
        {
            await _userService.SaveAsync(id, _mapper.Map<D.User>(user));
        }

        [HttpDelete("{id:int}")]
        public async Task DeleteAsync(int id)
        {
            await _userService.DeleteAsync(id);
        }
    }
}
