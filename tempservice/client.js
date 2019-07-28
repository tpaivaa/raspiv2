const io = require('socket.io-client');

const socket = io('http://10.10.10.173:6660');
socket.on('connect', () => {
  console.log("Connected!"); // false
});
socket.emit('event', {message:'This'}, (data) => {
  console.log(data);
});