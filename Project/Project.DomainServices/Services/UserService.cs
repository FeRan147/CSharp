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

        public async Task<IList<User>> GetAllAsync(bool includeDevices)
        {
            using (var context = _contextFactory.GetProjectContext())
            {
                var usersQuery = context.Users.AsQueryable();

                if (includeDevices)
                {
                    usersQuery = usersQuery.Include(_ => _.Devices);
                }

                var users = await usersQuery
                                    .ToListAsync()
                                    .ConfigureAwait(false);

                return users.Select(item =>
                {
                    var entity = _mapper.Map<User>(item);
                    return entity;
                }).ToList();
            }
        }

        public async Task<User> GetAsync(int id, bool includeDevices)
        {
            using (var context = _contextFactory.GetProjectContext())
            {
                var user = await context
                                    .Users
                                    .FirstOrDefaultAsync(_ => _.Id == id)
                                    .ConfigureAwait(false);

                if (includeDevices)
                {
                    user.Devices = context.Devices.Where(device => device.Id == user.Id).ToList();
                }

                return _mapper.Map<User>(user);
            }
        }

        public async Task DeleteAsync(int id)
        {
            using (var context = _contextFactory.GetProjectContext())
            {
                var user = await context
                                    .Users
                                    .FirstOrDefaultAsync(_ => _.Id.Equals(id))
                                    .ConfigureAwait(false);

                if (user == null) return;

                await Task.Run(() => context
                                        .Users
                                        .Remove(user));

                context.SaveChanges();
            }
        }

        public async Task SaveAsync(int? id, User user)
        {
            if (user == null) return;

            using (var context = _contextFactory.GetProjectContext())
            {
                I.User chooseUser = new I.User();

                if (id == null)
                {
                    chooseUser = await context
                                        .Users
                                        .FirstOrDefaultAsync(_ => _.Id.Equals(id))
                                        .ConfigureAwait(false);
                    _mapper.Map(user, chooseUser);
                }
                else
                {
                    _mapper.Map(user, chooseUser);
                    await context
                            .Users
                            .AddAsync(chooseUser)
                            .ConfigureAwait(false);
                }

                context.SaveChanges();
            }
        }

        public async Task<IList<User>> GetPagedAsync(int currentPage, int onPage)
        {
            using (var context = _contextFactory.GetProjectContext())
            {
                var offset = (currentPage - 1) * onPage;

                var users = await context
                    .Users
                    .Skip(offset)
                    .Take(onPage)
                    .ToListAsync()
                    .ConfigureAwait(false);

                return users.Select(item =>
                        {
                            var entity = _mapper.Map<User>(item);
                            return entity;
                        }).ToList();
            }
        }

        public void Dispose()
        {
        }
    }
}
