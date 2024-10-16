let inputSenha = document.querySelector('#inpass');

let labelemail = document.querySelector('#email');
let email = document.querySelector('#inemail');
let validemail = false;

let labelSenha = document.querySelector('#senha');
let inpass = document.querySelector('#inpass');
let validsenha = false;

let erro = document.querySelector('#erro');
let sucesso = document.querySelector('#sucesso');

email.addEventListener('keyup', () => {
    if (!email.value.includes('@')) {
        labelemail.setAttribute('style', 'color: red');
        labelemail.innerHTML = 'Digite seu email';
        email.setAttribute('style', 'border-color: red');
        validemail = false;
    } else {
        labelemail.setAttribute('style', 'color: green');
        labelemail.innerHTML = 'Digite seu email';
        email.setAttribute('style', 'border-color: green');
        validemail = true;
    }
});

inpass.addEventListener('keyup', () => {
    if (inpass.value.length <= 5) {
        labelSenha.setAttribute('style', 'color: red');
        labelSenha.innerHTML = 'Insira no mínimo 6 caracteres';
        inpass.setAttribute('style', 'border-color: red');
        validsenha = false;
    } else {
        labelSenha.setAttribute('style', 'color: green');
        labelSenha.innerHTML = 'Digite sua senha';
        inpass.setAttribute('style', 'border-color: green');
        validsenha = true;
    }
});

function cadastrar(event) {
    event.preventDefault();
    if (validemail && validsenha) {
        sucesso.setAttribute('style', 'display: block');
        sucesso.innerHTML = 'Acessando conta...';
        erro.style.display = 'none'; 
        txt.innerHTML = null
    } else {
        erro.setAttribute('style', 'display: block');
        erro.innerHTML = 'Preencha tudo corretamente';
        sucesso.style.display = 'none'; 
        txt.innerHTML = null
        
    }
}

document.querySelector('#box').addEventListener('change', () => {
    if (inputSenha.getAttribute('type') === 'password') {
        inputSenha.setAttribute('type', 'text');
    } else {
        inputSenha.setAttribute('type', 'password');
    }
});
