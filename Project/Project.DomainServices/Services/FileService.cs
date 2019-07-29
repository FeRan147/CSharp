using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Project.Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Threading.Tasks;

namespace Project.DomainServices.Services
{
    public class FileService : IFileService
    {
        public async Task<string> SaveFileAsync(IFormFile file, IHostingEnvironment hostingEnvironment)
        {
            var uploads = Path.Combine(hostingEnvironment.ContentRootPath, "uploads");

            if(!Directory.Exists(uploads))
            {
                Directory.CreateDirectory(uploads);
            }

            if (file.Length > 0)
            {
                var filePath = Path.Combine(uploads, file.FileName);

                if(File.Exists(filePath))
                {
                    File.Delete(filePath);
                }

                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    await file
                            .CopyToAsync(fileStream)
                            .ConfigureAwait(false);

                    return filePath;
                }
            }

            return string.Empty;
        }
    }
}
