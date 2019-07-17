using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLogic.BL.Interfaces
{
    public interface ITestService<T> : IBaseService<T> where T : class
    {
    }
}
