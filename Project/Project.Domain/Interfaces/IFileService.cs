using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Project.Domain.Interfaces
{
    public interface IFileService
    {

        Task<string> SaveFileAsync(IFormFile file, IHostingEnvironment hostingEnvironment);
    }
}
