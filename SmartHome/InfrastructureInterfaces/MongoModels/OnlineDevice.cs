using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Text;

namespace InfrastructureInterfaces.MongoModels
{
    public class OnlineDevice
    {
        [BsonId]
        public string Name { get; set; }
    }
}
