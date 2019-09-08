using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Project.Domain.Interfaces;
using Project.WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project.WebApi.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class LogController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly ILogService _logService;

        public LogController(IMapper mapper, ILogService logService)
        {
            _mapper = mapper;
            _logService = logService;
        }

        [HttpGet]
        public async Task<IEnumerable<Log>> GetAsync()
        {
            var roles = await _logService.GetLogsAsync();

            return roles.Select(item =>
            {
                var entity = _mapper.Map<Log>(item);
                return entity;
            }).ToList();
        }
    }
}
