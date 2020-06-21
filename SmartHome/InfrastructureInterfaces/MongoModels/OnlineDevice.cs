using MongoDB.Bson.Serialization.Attributes;

namespace InfrastructureInterfaces.MongoModels
{
    public class OnlineDevice
    {
        [BsonId]
        public string Name { get; set; }
    }
}
