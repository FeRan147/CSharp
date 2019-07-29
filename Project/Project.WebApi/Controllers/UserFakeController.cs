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
    public class UsersFakeController : ControllerBase, IBaseFakeController<User>
    {
        private readonly IMapper _mapper;
        private readonly IUserFakeService _userFakeService;

        public UsersFakeController(IMapper mapper, IUserFakeService userFakeService)
        {
            _mapper = mapper;
            _userFakeService = userFakeService;
        }

        [HttpGet("{includeDevices:bool}")]
        public IEnumerable<User> GetAll(bool includeDevices)
        {
            var users = _userFakeService.GetAll(includeDevices);

            return users.Select(item =>
                {
                    var entity = _mapper.Map<User>(item);
                    return entity;
                }).ToList();
        }

        [HttpGet("{id:int}/{includeDevices:bool}")]
        public User Get(int id, bool includeDevices)
        {
            var user = _userFakeService.Get(id, includeDevices);
            return _mapper.Map<User>(user);
        }

        [HttpGet("{currentPage:int}/{onPage:int}")]
        public IList<User> GetPaged(int currentPage, int onPage)
        {
            var pagedUsers = _userFakeService.GetPaged(currentPage, onPage);
            return pagedUsers.Select(item =>
            {
                var entity = _mapper.Map<User>(item);
                return entity;
            }).ToList();
        }

        [HttpPost]
        public void Post([FromBody] User user)
        {
            _userFakeService.Add(_mapper.Map<D.User>(user));
        }

        [HttpPut("{id:int}")]
        public void Put(int id, [FromBody] User user)
        {
            _userFakeService.Update(id, _mapper.Map<D.User>(user));
        }

        [HttpDelete("{id:int}")]
        public void Delete(int id)
        {
            _userFakeService.Delete(id);
        }
    }
}
