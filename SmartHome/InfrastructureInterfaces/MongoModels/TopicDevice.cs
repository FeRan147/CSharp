using MongoDB.Bson.Serialization.Attributes;

namespace InfrastructureInterfaces.MongoModels
{
    public class TopicDevice
    {
        [BsonId]
        public string Name { get; set; }
        public string Topic { get; set; }
        public string Payload { get; set; }
    }
}
