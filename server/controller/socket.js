// //es-lint disable////


const SocketSingleton = require('../socket');

const chat = SocketSingleton.io
  .of('/chat')
  .on('connection', (socket) => {
    socket.emit('a message', {
      that: 'only',
      '/chat': 'will get',
    });
    chat.emit('a message', {
      everyone: 'in',
      '/chat': 'will get',
    });
  });

const news = SocketSingleton.io
  .of('/news')
  .on('connection', (socket) => {
    socket.emit('item', { news: 'item' });
  });
