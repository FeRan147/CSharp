using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Project.Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Project.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FileController : ControllerBase
    {
        private IHostingEnvironment _hostingEnvironment;
        private readonly IFileService _fileService;

        public FileController(IHostingEnvironment hostingEnvironment, IFileService fileService)
        {
            _hostingEnvironment = hostingEnvironment;
            _fileService = fileService;
        }

        [HttpPost]
        [Route("upload")]
        public async Task<string> PostFileAsync(IFormFile uploadFile)
        {
            return await _fileService.SaveFileAsync(uploadFile, _hostingEnvironment);
        }
    }
}
