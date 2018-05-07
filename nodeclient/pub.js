var mqtt = require("mqtt");
var client = mqtt.connect("mqtt://127.0.0.1:1883");
client.on("connect", function() {
	client.subscribe("/load2");
	client.publish("/load2", "Hello mqtt");
});
client.on("message", function(topic, message) {
	// message is Buffer
	console.log(message.toString());
	client.end();
});
