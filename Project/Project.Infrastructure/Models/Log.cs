using System;
using System.Collections.Generic;
using System.Text;

namespace Project.Infrastructure.Models
{
    public class Log
    {
        public int Id { get; set; }
        public string RequestHost { get; set; }
        public string RequestPath { get; set; }
        public string RequestMethod { get; set; }
        public string RequestProtocol { get; set; }
        public string ResponseCode { get; set; }
    }
}
