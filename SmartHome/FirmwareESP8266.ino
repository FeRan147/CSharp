/////////////////////////////////
// Generated with a lot of love//
// with TUNIOT FOR ESP8266     //
// Website: Easycoding.tn      //
/////////////////////////////////
#include <ESP8266WiFi.h>

#include <PubSubClient.h>

extern "C" {
#include "wpa2_enterprise.h"
}

// SSID to connect to
static const char* ssid = "FeRan_Wi-Fi";
// Username for authentification
static const char* username = "gvozdik";
// Password for authentication
static const char* password = "FeRan25071990";
static const char* mqttserverip = "192.168.100.133";
static const int mqttserverport = 1883;

WiFiClient espClient;
PubSubClient client(espClient);

void reconnectmqttserver() {
  while (!client.connected()) {
    Serial.print("Attempting MQTT connection...");
    String clientId = "ESP8266Client-";
    clientId += String(random(0xffff), HEX);
    if (client.connect(clientId.c_str())) {
      Serial.println("connected");
      // Once connected, publish an announcement...
      client.publish("outTopic", "hello world");
      // ... and resubscribe
      client.subscribe("test/output");
    } else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      delay(5000);
    }
  }
}

char msgmqtt[50];
void callback(char* topic, byte* payload, unsigned int length) {
  Serial.print("Message arrived on topic: ");
  Serial.print(topic);
  Serial.print(". Message: ");

  String MQTT_DATA = "";
  for (int i = 0; i < length; i++) {
    Serial.print((char)payload[i]);
    MQTT_DATA += (char)payload[i];
  }

  if (String(topic) == "test/output") {
    Serial.print("Changing output to ");
    if (MQTT_DATA == "on") {
      Serial.println("on");
      digitalWrite(2, HIGH);
    }
    else if (MQTT_DATA == "off") {
      Serial.println("off");
      digitalWrite(2, LOW);
    }
  }
}

void setup()
{
  pinMode(2, OUTPUT);

  Serial.begin(9600);
  WiFi.disconnect();
  delay(3000);
  Serial.println("START");
  /*
    // WPA2 Connection starts here
    // Setting ESP into STATION mode only (no AP mode or dual mode)
    wifi_set_opmode(STATION_MODE);
    struct station_config wifi_config;
    memset(&wifi_config, 0, sizeof(wifi_config));
    strcpy((char*)wifi_config.ssid, ssid);
    wifi_station_set_config(&wifi_config);
    wifi_station_clear_cert_key();
    wifi_station_clear_enterprise_ca_cert();
    wifi_station_set_wpa2_enterprise_auth(1);
    wifi_station_set_enterprise_identity((uint8*)username, strlen(username));
    wifi_station_set_enterprise_username((uint8*)username, strlen(username));
    wifi_station_set_enterprise_password((uint8*)password, strlen(password));
    wifi_station_connect();
    // WPA2 Connection ends here
  */
  // Normal Connection starts here
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  // Normal Connection ends here
  while ((!(WiFi.status() == WL_CONNECTED))) {
    delay(300);
    Serial.print("..");
  }
  Serial.println("Connected");
  Serial.println("Your IP is");
  Serial.println((WiFi.localIP().toString()));
  client.setServer(mqttserverip, mqttserverport);
  client.setCallback(callback);
}


void loop()
{
  if (!client.connected()) {
    reconnectmqttserver();
  }
  client.loop();
  snprintf (msgmqtt, 50, "%d ", digitalRead(2));
  client.publish("test", msgmqtt);
  delay(5000);
}