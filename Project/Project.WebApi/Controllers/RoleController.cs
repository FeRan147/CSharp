using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Project.Domain.Interfaces;
using Project.WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using D = Project.Domain.Models;

namespace Project.WebApi.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class RolesController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IRoleService _roleService;

        public RolesController(IMapper mapper, IRoleService roleService)
        {
            _mapper = mapper;
            _roleService = roleService;
        }

        [HttpGet]
        public async Task<IEnumerable<Role>> GetAsync()
        {
            var roles = await _roleService.GetRolesAsync();

            return roles.Select(item =>
            {
                var entity = _mapper.Map<Role>(item);
                return entity;
            }).ToList();
        }

        [HttpGet("{id}")]
        public async Task<Role> GetAsync(int id)
        {
            var role = await _roleService.GetRoleAsync(id);
            return _mapper.Map<Role>(role);
        }

        [HttpPost]
        public async Task PostAsync([FromBody] Role role)
        {
            await _roleService.SaveRoleAsync(null, _mapper.Map<D.Role>(role));
        }

        [HttpPut("{id}")]
        public async Task PutAsync(int id, [FromBody] Role role)
        {
            await _roleService.SaveRoleAsync(id, _mapper.Map<D.Role>(role));
        }

        [HttpDelete("{id}")]
        public async Task DeleteAsync(int id)
        {
            await _roleService.DeleteRoleAsync(id);
        }
    }
}
