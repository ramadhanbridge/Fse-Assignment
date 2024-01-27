// socket.js

import message_modal from "../models/message_modal.js";

const connectedUsers = [];

export default (io) => {
  io.on('connection', async (socket) => {
    console.log('user connected', socket.id);
    connectedUsers.push(socket.id);

    // Get old messages and send them to the connected client
    const oldMessages = await message_modal.get_all_message();
    socket.emit('old messages', oldMessages);

    // Listen for new messages from the connected client
    socket.on('new message', async (message) => {
      // Add the new message to the database
      await message_modal.add_message(message);

      // Broadcast the new message to all connected clients
      io.emit('new message', message);
    });

    // Handle disconnection
    socket.on('disconnect', () => {
      console.log('user disconnected', socket.id);
      
      // Remove the disconnected user from the connectedUsers array
      const index = connectedUsers.indexOf(socket.id);
      if (index !== -1) {
        connectedUsers.splice(index, 1);
      }
      
    });
  });
};
