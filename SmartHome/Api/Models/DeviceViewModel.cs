﻿namespace Api.Models
{
    public class DeviceViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int UserId { get; set; }
        public UserViewModel User { get; set; }
    }
}
