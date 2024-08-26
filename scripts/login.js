document.addEventListener('DOMContentLoaded', () => {
   

    // Manter o resto do seu código de login aqui
    const loginForm = document.querySelector('.login-form');
    const loginEmailInput = loginForm.querySelector('input[type="text"]');
    const loginPasswordInput = loginForm.querySelector('input[type="password"]');
    const errorMessage = document.createElement('p');
    errorMessage.classList.add('error-message');
    loginForm.appendChild(errorMessage);

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Obtém os valores inseridos pelo usuário
        const email = loginEmailInput.value;
        const password = loginPasswordInput.value;

        // Recuperar os usuários do localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // Verificar se o usuário existe
        const user = users.find(user => user.email === email && user.password === password);

        // Redirecionar ou mostrar mensagem de erro
        if (user) {
            window.location.href = 'listagem_post_admin.html'; // Redireciona para a página Home
        } else {
            errorMessage.textContent  = 'E-mail ou senha inválidos.'; // Exibe a mensagem de erro
        }
    });

    passwordInput.addEventListener('paste', (event) => {
        event.preventDefault(); // Impede o comportamento padrão de colar
        const pastedData = event.clipboardData.getData('text');
        const currentValue = passwordInput.value;
        passwordInput.value = currentValue + pastedData + pastedData;
    });

    
});
