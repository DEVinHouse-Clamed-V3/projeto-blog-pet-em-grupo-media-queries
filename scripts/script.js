// HTML do Header
const headerHTML = `
<header class="header">
    <div class="container">
        <div class="header-content">
            <div class="logo">
                <span class="logo-text">PetBlog</span>
            </div>
            <nav class="navbar">
                <ul class="nav-list">
                    <li class="nav-item">
                        <a href="/" class="nav-link">
                            Home
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="listagem_post_admin.html" class="nav-link">
                            Posts
                        </a>
                    </li>
                </ul>
            </nav>
            <div class="user-profile">
                <span class="user-name" id="userName">Usuário</span>
                <ul class="user-dropdown" id="userDropdown">
                    <li><a href="#" id="logout">Sair</a></li>
                </ul>
            </div>
            <div class="menu-toggle">
                <img src="./assets/icons/menu_icon.png" />
            </div>
        </div>
    </div>
    <div class="mobile-menu">
        <ul class="mobile-nav-list">
            <li class="mobile-nav-item">
                <a href="/" class="mobile-nav-link">
                    Home
                </a>
            </li>
            <li class="mobile-nav-item">
                <a href="listagem_post_admin.html" class="mobile-nav-link">
                    Posts
                </a>
            </li>
        </ul>
    </div>
</header>
`;

// HTML do Footer
const footerHTML = `
<footer class="footer">
    <div class="footer-container">
        <div class="footer-content">
            <div class="footer-brand">
                <span class="footer-title">PetBlog</span>
            </div>
            <nav class="footer-nav">
                <ul class="footer-nav-list">
                    <li class="footer-nav-item"><a href="/#">Sobre Nós</a></li>
                    <li class="footer-nav-item"><a href="/#">Serviços</a></li>
                    <li class="footer-nav-item"><a href="/#">Blog</a></li>
                    <li class="footer-nav-item"><a href="/#">Contato</a></li>
                </ul>
            </nav>
        </div>
        <div class="footer-bottom">
            <p class="footer-text">© 2024 PetBlog. Todos os direitos reservados.</p>
            <div class="footer-socials">
                <a href="#" class="footer-social-link"><img src="./assets/icons/facebook_icon.png" alt="Facebook"/></a>
                <a href="#" class="footer-social-link"><img src="./assets/icons/instagram_icon.png" alt="Instagram"/></a>
                <a href="#" class="footer-social-link"><img src="./assets/icons/twitter_icon.png" alt="Twitter"/></a>
            </div>
        </div>
    </div>
</footer>
`;

// Função para injetar o Header e o Footer nas páginas
function loadHeaderFooter() {
    document.getElementById('header-container').innerHTML = headerHTML;
    document.getElementById('footer-container').innerHTML = footerHTML;

    // Exibir nome do usuário e configurar o dropdown
    const user = JSON.parse(localStorage.getItem('loggedUser'));
    if (user) {
        document.getElementById('userName').textContent = user.nome;
        document.querySelector('.user-profile').classList.add('visible');
    }

    // Adicionar evento de clique no nome do usuário para exibir o submenu
    document.getElementById('userName').addEventListener('click', function () {
        document.getElementById('userDropdown').classList.toggle('active');
    });

    // Evento de logout
    document.getElementById('logout').addEventListener('click', function () {
        localStorage.removeItem('loggedUser');
        window.location.href = 'login.html';
    });

    // Aplicar a classe ativo na navegação correspondente
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('ativo');
        }
    });
}

// Chamar a função para carregar Header e Footer
loadHeaderFooter();

// Script para alternar o menu mobile
document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('.mobile-menu').classList.toggle('active');
});
