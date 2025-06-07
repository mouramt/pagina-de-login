function cadastrar() {
    const usuario = document.getElementById('novoUsuario').value.trim();
    const senha = document.getElementById('novaSenha').value.trim();
    const cadMsg = document.getElementById('cadMsg');

    cadMsg.className = '';
    cadMsg.textContent = '';

    if (usuario === '' || senha === '') {
        cadMsg.textContent = 'preencha todos os campos.';
        cadMsg.classList.add('error');
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    if (usuarios.some(u => u.nome === usuario)) {
        cadMsg.textContent = 'Usuário já existe!';
        cadMsg.classList.add('error');
        return;
    }

    usuarios.push({ nome: usuario, senha: senha});
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    cadMsg.textContent = 'Cadastro realizado com sucesso!';
    cadMsg.classList.add('success');
} 