document.querySelector('#box').addEventListener('change', () => {
    let inputSenha = document.querySelector('#inpass')

    if (inputSenha.getAttribute('type') === 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password');
    }
})
