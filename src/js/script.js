const btn = document.querySelector('.btn-login');
const loginscree = document.getElementById('loginscreen');
const backbtn = document.querySelector('.backlogin');
const eye = document.getElementById('eye');
const eyeclosed = document.getElementById('eye-slash');
const logar = document.getElementById('logar');
const menuStudant = document.getElementById('menuStudant')

backbtn.addEventListener('click', returned);
btn.addEventListener('click', handleclick);
logar.addEventListener('click', login);
eye.addEventListener('click', togglePasswordVisibility);
eyeclosed.addEventListener('click', togglePasswordVisibility);

function togglePasswordVisibility() {
    const password = document.getElementById('senha');

    if (password.type === 'password') {
        password.type = 'text';
        eye.classList.add('hide');
        eyeclosed.classList.remove('hide');
    } else {
        password.type = 'password';
        eye.classList.remove('hide');
        eyeclosed.classList.add('hide');
    }
}

function login(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('senha').value;
    const msg_alert_email = document.querySelector('.msg-alert-email');
    const msg_alert_senha = document.querySelector('.msg-alert-senha');
    const account = document.getElementById('conta');
    const user = document.querySelector('.user');

    if (email == '' && password == '' && password.length < 8){
        msg_alert_email.classList.remove('hide');
        msg_alert_senha.classList.remove('hide');
    }else if(email == '' ){
        msg_alert_senha.classList.add('hide')
    }else if(password == '' || password.length < 8){
        msg_alert_email.classList.add('hide');
        msg_alert_senha.classList.remove('hide');
    }else{
        msg_alert_senha.classList.add('hide');
        loginscree.classList.add('hide');
        btn.classList.add('hide');
        menuStudant.classList.remove('hide');
        user.innerHTML = `<i class="bi bi-person" "width= 20"></i><h4>${email}</h4>`;
    }
}

function returned(){
    loginscree.classList.add('hide');
}

function handleclick(){
    loginscree.classList.remove('hide');
}

const openPage = document.getElementById('openMenu');
const UserMenu = document.getElementById('UserMenu');
const backPage = document.querySelector('.backMenu');

openPage.addEventListener('click', openofmenu);
backPage.addEventListener('click', backofhome);

function openofmenu(){
    UserMenu.classList.add('show');
    UserMenu.classList.remove('disappear');
}

function backofhome(){
    UserMenu.classList.add('disappear');
    UserMenu.classList.remove('show');
}

const exit = document.getElementById('exit');

exit.addEventListener('click', exitLogin)

function exitLogin(){
    btn.classList.remove('hide')
    menuStudant.classList.add('hide')
}