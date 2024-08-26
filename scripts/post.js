document.addEventListener('DOMContentLoaded', function() {
    function setupLocalStorage() {
        // Verifica se 'posts' já existe no localStorage
        if (!localStorage.getItem('posts')) {
            const posts = [
                {
                    id: "123",
                    image: "image/gato.jpg",
                    title: "Sobre Seu Pet",
                    date: "1 Aninho",
                    category: "Gato",
                    description: "Este gatinho branco de 1 ano é uma bolinha de neve de pelo macio e sedoso. Seus olhos grandes e curiosos refletem sua personalidade brincalhona e afetuosa. Ele traz alegria e tranquilidade por onde passa."
                }
            ];

            localStorage.setItem('posts', JSON.stringify(posts));
        }
    }

    setupLocalStorage();

    function getQueryParam(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    const postId = getQueryParam('id');
    const postContainer = document.getElementById('container-post');
    const barrinha = document.querySelector('.texto2-logotipo');
    const postTempo = document.querySelector('.texto3-logotipo');

    // Esconda os elementos de separação e tempo inicialmente
    barrinha.classList.add('esconder-post');
    postTempo.classList.add('esconder-post');

    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    if (postId) {
        const post = posts.find(p => p.id === postId);

        if (post) {
            // Se o post for encontrado, mostre os elementos de separação e tempo
            barrinha.classList.remove('esconder-post');
            postTempo.classList.remove('esconder-post');

            postContainer.innerHTML = `
                <img src="image/gato.jpg" class="imagem-gato" alt="${post.title}">
                <span class="titulo">${post.title}</span>
                <span class="subtitulo">
                    <span class="data-titulo">DATA:</span>
                    <span class="data-conteudo">${post.date}</span>
                </span>
                <span class="subtitulo">
                    <span class="categoria-titulo">CATEGORIA:</span>
                    <span class="categoria-conteudo">${post.category}</span>
                </span>
                <span class="subtitulo">${post.description}</span>
            `;
        } else {
            // Exibir mensagem de erro para post não encontrado
            postContainer.innerHTML = `
                <div class="mensagem-erro-container">
                    <img src="image/erro1.png" class="imagem-erro1" alt="Erro">
                    <span class="mensagem-erro1">Conteúdo Não Encontrado</span>
                </div>`;
        }
    } else {
        // Exibir mensagem de erro se o ID não for fornecido
        postContainer.innerHTML = `
            <div class="mensagem-erro-container">
                <img src="image/erro2.png" class="imagem-erro2" alt="Erro">
                <span class="mensagem-erro2">Forneça o ID do Post</span>
            </div>`;
    }
});
