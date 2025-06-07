function login() {
    const usuario = document.getElementById('usuario').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const loginMsg = document.getElementById('loginMsg');

    loginMsg.className = '';
    loginMsg.textContent = '';

    if (usuario === '' || senha === '') {
        loginMsg.textContent = 'Preencha todos os campos.';
        loginMsg.classList.add('error');
        return;
    }

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuarioValido = usuarios.find(u => u.nome === usuario && u.senha === senha);

    if (usuarioValido) {
        const mensagensEspeciais = {
        "mouramt": "Olá, mestre! Bem-vindo de volta.🦉"
    };

    const mensagem = mensagensEspeciais[usuario] || `Bem-vindo, ${usuario}!`;
    loginMsg.textContent = mensagem;
    loginMsg.classList.add('success');

    setTimeout(() => {
        window.location.href = 'https://mouramt.github.io/Portifolio/';
        }, 1500);
    } else {
    loginMsg.textContent = 'Usuario ou senha inválidos.';
    loginMsg.classList.add('error');
    }
}