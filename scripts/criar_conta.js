// função para validar o formato do email (isso eu pesquisei pois nao conhecia :o)
function validarEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

//isso valida se o email ja esta cadastrado
function emailJaRegistrado(email) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  return users.some((user) => user.email === email);
}

// ============= FUNÇÃO PARA SALVAR DADOS DO CADASTRO NO LOCAL STORAGE =======================
document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const foto = document.getElementById("photoUrl").value;
    const nome = document.getElementById("name").value;
    const senha = document.getElementById("password").value;
    const confirmacaoSenha = document.getElementById("confirmPassword").value;
    const email = document.getElementById("email").value;
    const descricao = document.getElementById("description").value;

    // validar as coisa (email senha e comfimarção)
    if (!validarEmail(email)) {
      alert("Por favor, insira um email válido.");
      return;
    }

    if (emailJaRegistrado(email)) {
      alert("Este email já está registrado.");
      return;
    }

    if (senha.length < 8 || senha.length > 16) {
      alert("A senha deve ter entre 8 e 16 caracteres.");
      return;
    }

    if (senha !== confirmacaoSenha) {
      alert("A senha e a confirmação de senha não são iguais.");
      return;
    }

    // Cria o objeto de usuário
    const newUser = {
      id: Date.now(),
      nome: nome,
      foto: foto,
      email: email,
      senha: senha,
      biografia: descricao,
    };

    // Recupera a lista de usuários do localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Adiciona o novo usuário à lista
    users.push(newUser);

    // Salva a lista atualizada no localStorage
    localStorage.setItem("users", JSON.stringify(users));

    // Limpa o form após a submissão
    document.getElementById("signupForm").reset();

    alert("Usuário registrado com sucesso!");

    // Redireciona para a página de login após o cadastro
    window.location.href = "login.html";
  });

// ============ FUNÇÃO PARA MOSTRAR INFORMAÇÕES NO CARD ===========================

// isso faz com que quando o usuario digitar algo no formulario, atualiza as informações no card
document.getElementById("signupForm").addEventListener("input", function () {
  // aqui eé se o card não estiver salvo, ele atualiza os campos do card
  if (!localStorage.getItem("isCardSaved")) {
    //isso pega o nome digitado e mostra no card
    const nomeDigitado = document.getElementById("name").value;
    document.getElementById("displayName").textContent =
      nomeDigitado || "Seu Nome";

    // pega a URL da foto digitada e mostra no card
    const fotoDigitada = document.getElementById("photoUrl").value;
    document.getElementById("profileImg").src =
      fotoDigitada || "default-avatar.png";

    // pega o email digitado e mostra no card
    const emailDigitado = document.getElementById("email").value;
    document.getElementById("displayEmail").textContent =
      emailDigitado || "seu.email@exemplo.com";

    // pega a descrição digitada e mostra no card
    const descricaoDigitada = document.getElementById("description").value;
    document.getElementById("shortDescription").textContent = descricaoDigitada;
  }
});

// =================== FUNÇÃO PARA MOSTRAR E OCULTA A DESCRIÇÃO NO CARD =====================

// Quando o botão para vea a descrição é clicado
document
  .getElementById("descriptionBtn")
  .addEventListener("click", function () {
    const corpoDoCard = document.querySelector(".card-body");
    const textoDoCard = document.querySelector(".short-description");

    // alterna a classe active para o  card
    corpoDoCard.classList.toggle("active");
    textoDoCard.classList.toggle("active");

    // altera o texto do botão conforme a descrição, se ta  visivel ou não :)
    if (
      corpoDoCard.classList.contains("active") ||
      textoDoCard.classList.contains("active")
    ) {
      document.getElementById("descriptionBtn").textContent =
        "Ocultar Descrição";
    } else {
      document.getElementById("descriptionBtn").textContent = "Ver Descrição";
    }
  });
