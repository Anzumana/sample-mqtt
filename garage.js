const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://broker.hivemq.com');
//const client = mqtt.connect('mqtt://192.168.0.150');

var state ='closed';

client.on('connect', () => {
	console.log('connect callback');
	setInterval(function(){
	 client.publish('garage/connected','true');
	},3000);
});

