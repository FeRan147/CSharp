using IdentityInterfaces.Models;
using MongoDB.Bson.Serialization.Attributes;

namespace InfrastructureInterfaces.Models
{
    public class Device
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
    }
}
