var mqtt = require("mqtt");
var client = mqtt.connect("mqtt://127.0.0.1:1883");
var a = Array.apply(null, Array(10000)).map(function(x, i) {
	return 1;
});
client.on("connect", function() {
	console.log("Connected");
	a.forEach(function() {
		console.log(1);
		client.publish("/load2", "Hello mqtt", { qos: 1 });
	});
});
