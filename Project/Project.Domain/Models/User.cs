using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;

namespace Project.Domain.Models
{
    public class User : IdentityUser<int>
    {
        public IList<Device> Devices { get; set; }
    }
}
