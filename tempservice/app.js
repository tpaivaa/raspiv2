const server = require('http').createServer();
const io = require('socket.io')(server);
const messages =  require('./events_module.js').messages;

io.on('connection', client => {
	console.log('Connected');
  	client.on('event', data => { messages(data) });
  	client.on('disconnect', () => { /* … */ });
});
server.listen(6660);