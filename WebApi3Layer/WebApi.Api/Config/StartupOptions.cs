using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Api.Config
{
    /// <summary>
    /// Настройки для запуска приложения
    /// </summary>
    public class StartupOptions
    {
        /// <summary>
        /// Swagger включен
        /// </summary>
        public bool EnableSwagger = false;
    }
}
