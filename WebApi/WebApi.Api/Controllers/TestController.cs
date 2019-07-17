using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using BusinessLogic.BL.Interfaces;
using Microsoft.AspNetCore.Mvc;
using WebApi.Api.Models;
using BL = BusinessLogic.BL.Models;

namespace WebApi.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        private readonly ITestService<BL.Test> _service;

        private readonly IMapper _mapper;

        public TestController(ITestService<BL.Test> service, IMapper mapper)
        {
            _service = service;
            _mapper = mapper;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            try
            {
                var entity = await _service.GetByIdAsync(id);

                return Ok(_mapper.Map<BL.Test, Test>(entity));
            }
            catch (Exception ex)
            {
                return BadRequest($"{ex.Message}");
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var entity = await _service.GetAsync();

                return Ok(_mapper.Map<ICollection<BL.Test>, ICollection<Test>>(entity));
            }
            catch (Exception ex)
            {
                return BadRequest($"{ex.Message}");
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody]Test value)
        {
            try
            {
                var entity = _mapper.Map<BL.Test>(value);
                await _service.SaveAsync(entity);
                return Ok();
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpPut]
        public async Task<IActionResult> Put([FromBody]Test value)
        {
            try
            {
                var entity = _mapper.Map<BL.Test>(value);
                await _service.SaveAsync(entity);
                return Ok();
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                await _service.DeleteAsync(id);

                return Ok();
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
    }
}
