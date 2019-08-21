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
    public class RoleService: IRoleService
    {
        private readonly IMapper _mapper;
        private readonly IContextFactory _contextFactory;

        public RoleService(IMapper mapper, IContextFactory contextFactory)
        {
            _mapper = mapper;
            _contextFactory = contextFactory;
        }

        public async Task<IList<Role>> GetRolesAsync()
        {
            using (var context = _contextFactory.GetProjectContext())
            {
                var rolesQuery = context.Roles.AsQueryable();

                var roles = await rolesQuery.ToListAsync();

                return roles.Select(item =>
                {
                    var entity = _mapper.Map<Role>(item);
                    return entity;
                }).ToList();
            }
        }

        public async Task<Role> GetRoleAsync(int id)
        {
            using (var context = _contextFactory.GetProjectContext())
            {
                var role = await context.Roles.FirstOrDefaultAsync(_ => _.Id == id);

                return _mapper.Map<Role>(role);
            }
        }

        public async Task DeleteRoleAsync(int id)
        {
            using (var context = _contextFactory.GetProjectContext())
            {
                var role = await context
                    .Roles
                    .FirstOrDefaultAsync(_ => _.Id.Equals(id));

                if (role == null) return;

                await Task.Run(() => context.Roles.Remove(role));

                context.SaveChanges();
            }
        }

        public async Task SaveRoleAsync(int? id, Role role)
        {
            if (role == null) return;

            using (var context = _contextFactory.GetProjectContext())
            {
                I.Role chooseRole = new I.Role();

                if (id != null)
                {
                    chooseRole = await context
                        .Roles
                        .FirstOrDefaultAsync(_ => _.Id.Equals(id));
                    _mapper.Map(role, chooseRole);
                }
                else
                {
                    _mapper.Map(role, chooseRole);
                    await context.Roles.AddAsync(chooseRole);
                }

                context.SaveChanges();
            }
        }
    }
}
