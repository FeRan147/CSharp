using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using BusinessLogic.BL.Interfaces;
using BusinessLogic.BL.Models;
using DataAccess.DA.Interfaces;
using DA = DataAccess.DA.Models;
using Microsoft.EntityFrameworkCore;

namespace BusinessLogic.BL.Services
{
    public class TestService : ITestService<Test>
    {
        private readonly IContextFactory _contextFactory;
        private readonly IMapper _mapper;

        public TestService(IMapper mapper, IContextFactory contextFactory)
        {
            _mapper = mapper;
            _contextFactory = contextFactory;
        }

        public async Task<Test> GetByIdAsync(int id)
        {
            using (var context = _contextFactory.GetTestContext())
            {
                var entity = await context.Tests.FirstOrDefaultAsync(x => x.Id == id);
                return _mapper.Map<Test>(entity);
            }
        }

        public async Task<ICollection<Test>> GetAsync()
        {
            using (var context = _contextFactory.GetTestContext())
            {
                var entity = await context
                    .Tests
                    .ToListAsync();

                return entity.Select(item =>
                {
                    var mapEntity = _mapper.Map<Test>(item);
                    return mapEntity;
                }).ToList();
            }
        }

        public async Task SaveAsync(Test entity)
        {
            if (entity == null) return;

            using (var context = _contextFactory.GetTestContext())
            {
                var entityModel = await context
                    .Tests
                    .FirstOrDefaultAsync(item => item.Id.Equals(entity.Id));

                if (entityModel == null)
                {
                    entityModel = new DA.Test();
                    MapForUpdateEntity(entity, entityModel);
                    await context.Tests.AddAsync(entityModel);
                }
                else
                {
                    MapForUpdateEntity(entity, entityModel);
                }


                context.SaveChanges();
            }
        }

        public async Task DeleteAsync(int id)
        {
            using (var context = _contextFactory.GetTestContext())
            {
                var entityModel = context
                    .Tests
                    .FirstOrDefault(item => item.Id.Equals(id));

                if (entityModel == null) return;

                await Task.Run(() => context.Tests.Remove(entityModel));

                context.SaveChanges();
            }
        }

        private void MapForUpdateEntity(Test entity, DA.Test daEntity)
        {
            daEntity.Id = entity.Id;
            daEntity.Name = entity.Name;
        }

        public void Dispose()
        {
        }
    }
}
