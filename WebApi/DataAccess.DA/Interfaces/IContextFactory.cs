using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccess.DA.Interfaces
{
    public interface IContextFactory : IDisposable
    {
        ITestContext GetTestContext();
    }
}
