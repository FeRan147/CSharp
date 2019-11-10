using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Models
{
    public class LogViewModel
    {
        public int Id { get; set; }
        public string LogLevel { get; set; }
        public string CategoryName { get; set; }
        public string Message { get; set; }
        public DateTime TimeStamp { get; set; }
    }
}
