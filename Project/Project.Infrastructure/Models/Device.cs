﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Project.Infrastructure.Models
{
    public class Device
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool Availibility { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
    }
}
