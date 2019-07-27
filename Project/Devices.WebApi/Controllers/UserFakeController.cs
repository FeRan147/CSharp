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
    public class UsersFakeController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IUserFakeService _userFakeService;

        public UsersFakeController(IMapper mapper, IUserFakeService userFakeService)
        {
            _mapper = mapper;
            _userFakeService = userFakeService;
        }

        [HttpGet("{includeDevices}")]
        public ActionResult<IEnumerable<User>> Get(bool includeDevices)
        {
            var users = _userFakeService.GetUsers(includeDevices);

            return users.Select(item =>
            {
                var entity = _mapper.Map<User>(item);
                return entity;
            }).ToList();
        }

        [HttpGet("{id}/{includeDevices}")]
        public ActionResult<User> Get(int id, bool includeDevices)
        {
            var user = _userFakeService.GetUser(id, includeDevices);
            return _mapper.Map<User>(user);
        }

        [HttpPost]
        public void Post([FromBody] User user)
        {
            _userFakeService.AddUser(_mapper.Map<D.User>(user));
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody] User user)
        {
            _userFakeService.UpdateUser(id, _mapper.Map<D.User>(user));
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _userFakeService.DeleteUser(id);
        }
    }
}
