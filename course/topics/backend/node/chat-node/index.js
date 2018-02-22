const net = require('net')

let client = new net.Socket();
client.connect(3000, '192.168.0.16', function() {	
	client.write('新年快乐大家！！');
});

client.on('data', data => console.log(data.toString()))