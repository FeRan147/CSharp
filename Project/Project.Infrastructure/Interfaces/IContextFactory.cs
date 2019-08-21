using System;
using System.Collections.Generic;
using System.Text;

namespace Project.Infrastructure.Interfaces
{
    public interface IContextFactory : IDisposable
    {
        IProjectContext GetProjectContext();
    }
}
