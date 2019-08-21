using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Project.Domain.Interfaces;
using Project.Domain.Models;
using Project.Infrastructure.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using I = Project.Infrastructure.Models;

namespace Project.DomainServices.Services
{
    public class UserService: IUserService
    {
        private readonly IMapper _mapper;
        private readonly IContextFactory _contextFactory;

        public UserService(IMapper mapper, IContextFactory contextFactory)
        {
            _mapper = mapper;
            _contextFactory = contextFactory;
        }

        public async Task<IList<User>> GetUsersAsync(bool includeDevices)
        {
            using (var context = _contextFactory.GetProjectContext())
            {
                var usersQuery = context.Users.AsQueryable();

                if (includeDevices)
                {
                    usersQuery = usersQuery.Include(_ => _.Devices);
                }

                var users = await usersQuery.ToListAsync();

                return users.Select(item =>
                {
                    var entity = _mapper.Map<User>(item);
                    return entity;
                }).ToList();
            }
        }

        public async Task<User> GetUserAsync(int id, bool includeDevices)
        {
            using (var context = _contextFactory.GetProjectContext())
            {
                var user = await context.Users.FirstOrDefaultAsync(_ => _.Id == id);

                if (includeDevices)
                {
                    user.Devices = context.Devices.Where(device => device.Id == user.Id).ToList();
                }

                return _mapper.Map<User>(user);
            }
        }

        public async Task DeleteUserAsync(int id)
        {
            using (var context = _contextFactory.GetProjectContext())
            {
                var user = await context
                    .Users
                    .FirstOrDefaultAsync(_ => _.Id.Equals(id));

                if (user == null) return;

                await Task.Run(() => context.Users.Remove(user));

                context.SaveChanges();
            }
        }

        public async Task SaveUserAsync(int? id, User user)
        {
            if (user == null) return;

            using (var context = _contextFactory.GetProjectContext())
            {
                I.User chooseUser = new I.User();

                if (id != null)
                {
                    chooseUser = await context
                        .Users
                        .FirstOrDefaultAsync(_ => _.Id.Equals(id));
                    _mapper.Map(user, chooseUser);
                }
                else
                {
                    _mapper.Map(user, chooseUser);
                    await context.Users.AddAsync(chooseUser);
                }

                context.SaveChanges();
            }
        }
    }
}
