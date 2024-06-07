

function login() {
    if (document.querySelector('.login-box')) {
        document.querySelector('.login-box').remove();
    }
    else {
        let loginBox = document.createElement('div');
        loginBox.className = 'login-box';
        document.querySelector('body').appendChild(loginBox);
        loginBox.classList.add('login-box');

        let registerTitle = document.createElement('h2');
        registerTitle.textContent = 'Register';

        let registerForm = document.createElement('form');
        registerForm.id = 'register-form';

        let registerUsername = document.createElement('input');
        registerUsername.type = 'text';
        registerUsername.id = 'register-username';
        registerUsername.placeholder = 'Username';
        registerUsername.required = true;

        let registerPassword = document.createElement('input');
        registerPassword.type = 'password';
        registerPassword.id = 'register-password';
        registerPassword.placeholder = 'Password';
        registerPassword.required = true;

        let registerButton = document.createElement('button');
        registerButton.type = 'submit';
        registerButton.textContent = 'Register';

        registerForm.appendChild(registerUsername);
        registerForm.appendChild(registerPassword);
        registerForm.appendChild(registerButton);

        let loginTitle = document.createElement('h2');
        loginTitle.textContent = 'Login';

        let loginForm = document.createElement('form');
        loginForm.id = 'login-form';

        let loginUsername = document.createElement('input');
        loginUsername.type = 'text';
        loginUsername.id = 'login-username';
        loginUsername.placeholder = 'Username';
        loginUsername.required = true;

        let loginPassword = document.createElement('input');
        loginPassword.type = 'password';
        loginPassword.id = 'login-password';
        loginPassword.placeholder = 'Password';
        loginPassword.required = true;

        let loginButton = document.createElement('button');
        loginButton.type = 'submit';
        loginButton.textContent = 'Login';

        loginForm.appendChild(loginUsername);
        loginForm.appendChild(loginPassword);
        loginForm.appendChild(loginButton);

        loginBox.appendChild(registerTitle);
        loginBox.appendChild(registerForm);
        loginBox.appendChild(loginTitle);
        loginBox.appendChild(loginForm);

        document.getElementById('register-form').addEventListener('submit', function (event) {
            event.preventDefault();
            const username = document.getElementById('register-username').value;
            const password = document.getElementById('register-password').value;
            fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            })
                .then(response => response.json())
                .then(data => alert(data.message));
        });

        document.getElementById('login-form').addEventListener('submit', function (event) {
            event.preventDefault();
            const username = document.getElementById('login-username').value;
            const password = document.getElementById('login-password').value;
            fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            })
                .then(response => response.json())
                .then(data => alert(data.message));
        });
    }

}

window.onload = function() {
    var code = "";
    window.addEventListener("keydown",function(e) {
        code = (code+String.fromCharCode(e.keyCode || e.which)).substr(-11);
        if( code == "ABCDEFGHIJK" && window.innerWidth > 1280) {
            var login = document.querySelectorAll(".nav-login")[0];
            login.style.display = "block";
        }
    },false);
}
