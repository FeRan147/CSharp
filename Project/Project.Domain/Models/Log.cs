using System;
using System.Collections.Generic;
using System.Text;

namespace Project.Domain.Models
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
