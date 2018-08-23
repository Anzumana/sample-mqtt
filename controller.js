const mqtt = require('mqtt');
//const client = mqtt.connect('mqtt://192.168.0.150');
const client = mqtt.connect('mqtt://broker.hivemq.com');



var garageState = '';

var connected = false;

client.on('connect', () => {
	console.log('we are connected');
	client.subscribe('garage/connected');
});

client.on('message', (topic,message) => {
	console.log('message received');
	console.log(topic);
	console.log(message);
})


