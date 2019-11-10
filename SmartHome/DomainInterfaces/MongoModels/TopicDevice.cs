using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Text;

namespace DomainInterfaces.MongoModels
{
    public class TopicDevice
    {
        public string Name { get; set; }
        public string Topic { get; set; }
        public string Payload { get; set; }
    }
}
