const login = () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const url = 'http://localhost:3000/api/v1/auth/signin';
    const data = {
        username,
        password
    }
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }).then(res => res.json())
    .then(data => {
        if (data.status === 'success') {
            window.location.href = 'http://localhost:3000/html/chatroom.html';
        } else {
            alert(data.message);
        }
    })
}
const register = () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const url = 'http://localhost:3000/api/v1/auth/signup';
    const data = {
        username,
        password
    }
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }).then(res => res.json())
    .then(data => {
        if (data.status === 'success') {
            alert('Register success');
        } else {
            alert(data.message);
        }
    })
}
