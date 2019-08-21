using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project.WebApi.Models
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
