const postButton = document.getElementById('post-button');
const socket = io('http://localhost:3000', { reconnectionAttempts: Infinity });
let messages = [];


// Event listener for the button click
postButton.addEventListener('click', () => {

    const message = document.getElementById('post-input').value;

    if (message === '') {
        document.getElementById('post-input').focus();
        return;
    };

  // Send a message to the server when the button is clicked
  const userData = JSON.parse(localStorage.getItem('user_data'));
    const user_info = {
      user_id: userData.data.user_info.id,
      user_name: userData.data.user_info.user_name,
      };
  socket.emit('new message', { user_id: user_info.user_id, user_name: user_info.user_name, message_body: message});
    document.getElementById('post-input').value = '';
});

// Socket event listeners
socket.on('connect', () => {
  console.log('Connected to the server');
});

socket.on('new message', (message) => {
    const userData = JSON.parse(localStorage.getItem('user_data'));
    const user_info = {
      user_id: userData.data.user_info.id,
      user_name: userData.data.user_info.user_name,
      };


    messages.push(message);
    document.getElementById('newmessages').innerHTML = messages.map(message => `<li>
    <div class="info">
        <div class="user">${message.user_name === user_info.user_name ? "Me":message.user_name}</div>
        <div class="time">
        <span class="date">${getDate(message.date)}</span>
        <span class="hour">${getTime(message.time)}</span>
        </div>
    </div>
    <div class="message">${message.message_body}</div>
    
    </li>`).join('');
    window.scrollTo(0, document.body.scrollHeight);
});

socket.on('old messages', (messages) => {
    const userData = JSON.parse(localStorage.getItem('user_data'));
    const user_info = {
      user_id: userData.data.user_info.id,
      user_name: userData.data.user_info.user_name,
      };

    messages = messages;
    document.getElementById('oldmessages').innerHTML = messages.map(message => `<li>
    <div class="info">
        <div class="user">${message.user_name === user_info.user_name ? "Me":message.user_name}</div>
        <div class="time">
        <span class="date">${getDate(message.date)}</span>
        <span class="hour">${getTime(message.time)}</span>
        </div>
    </div>
    <div class="message">${message.message_body}</div>
    
    </li>`).join('');
});

socket.on('disconnect', () => {
  console.log('Disconnected from the server', socket.id);
});

// helper function to get the current time and date

const getTime = (time) => {
    return time.slice(0, 8);
}

const getDate = (time) => {
    const date = new Date(time);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
}
