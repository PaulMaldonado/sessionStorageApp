const form_session = document.getElementById('form-session');
form_session.addEventListener('submit', userSession);

function userSession(event) {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(email === '' || password === '') {
        alert("Los campos no pueden estar vacios");

        return
    }

    const users = {
        email: email,
        password: password
    }

    if(email !== email && password !== password) {
        let users_session = JSON.parse(sessionStorage.getItem('users_session'));

        alert('Tú email oh contraseña no son validos, intente nuevamente!');
        location.href = 'index.html';
    } else {
        let users_session = [];
        users_session.push(users);
        sessionStorage.setItem('users_session', JSON.stringify(users_session));
        location.href = 'user.html';
    }


    
    event.preventDefault();
    document.getElementById('form-session').reset();
}

