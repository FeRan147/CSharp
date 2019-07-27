using AutoMapper;
using Project.Domain.Interfaces;
using Project.Domain.Models;
using Project.Infrastructure.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using I = Project.Infrastructure.Models;

namespace Project.DomainServices.Services
{
    public class UserFakeService : IUserFakeService
    {
        private readonly IMapper _mapper;
        private readonly IContextFactory _contextFactory;

        public UserFakeService(IMapper mapper, IContextFactory contextFactory)
        {
            _mapper = mapper;
            _contextFactory = contextFactory;
        }

        public IList<User> GetUsers(bool includeDevices)
        {
            using (var context = _contextFactory.GetFakeProjectContext())
            {
                var users = context.GetUsers(includeDevices);

                return users.Select(item =>
                {
                    var entity = _mapper.Map<User>(item);
                    return entity;
                }).ToList();
            }
        }

        public User GetUser(int id, bool includeDevices)
        {
            using (var context = _contextFactory.GetFakeProjectContext())
            {
                var user = context.GetUser(id, includeDevices);
                return _mapper.Map<User>(user);
            }
        }

        public void DeleteUser(int id)
        {
            using (var context = _contextFactory.GetFakeProjectContext())
            {
                context.DeleteUser(id);
            }
        }

        public void AddUser(User user)
        {
            using (var context = _contextFactory.GetFakeProjectContext())
            {
                context.AddUser(_mapper.Map<I.User>(user));
            }
        }

        public void UpdateUser(int id, User user)
        {
            using (var context = _contextFactory.GetFakeProjectContext())
            {
                context.UpdateUser(id, _mapper.Map<I.User>(user));
            }
        }
    }
}
