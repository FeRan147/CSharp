using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace Project.DependencyInjection.Interfaces
{
    public interface IModule
    {
        void Register(IServiceCollection services);
    }
}
