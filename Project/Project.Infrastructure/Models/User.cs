﻿using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;

namespace Project.Infrastructure.Models
{
    public class User: IdentityUser<int>
    {
        public IList<Device> Devices { get; set; }
    }
}
