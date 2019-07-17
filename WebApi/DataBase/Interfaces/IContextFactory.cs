using System;
using System.Collections.Generic;
using System.Text;

namespace DataBase.Interfaces
{
    public interface IContextFactory : IDisposable
    {
        ITestContext GetTimeLineContext();
    }
}
