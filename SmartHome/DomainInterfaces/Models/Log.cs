using System;
using System.Collections.Generic;
using System.Text;

namespace DomainInterfaces.Models
{
    public class Log
    {
        public int Id { get; set; }
        public string LogLevel { get; set; }
        public string CategoryName { get; set; }
        public string Message { get; set; }
        public DateTime TimeStamp { get; set; }
    }
}
