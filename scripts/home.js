function calcularTempoLeitura(texto) {
    const caracteresPorMinuto = 1000; // Baseado em 200 palavras/min com 5 caracteres por palavra
    const minutosDeLeitura = Math.ceil(texto.length / caracteresPorMinuto);
    return minutosDeLeitura;
}

function carregarPostsHome() {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const postsContainer = document.querySelector('.postsContainer');

    posts.forEach(post => {
        const tempoLeitura = calcularTempoLeitura(post.descricao); // Calcula o tempo de leitura
        const card = `
            <div class="grid-item" ondblclick="verPost(${post.id})">
                <div class="post-box">
                    <img src="${post.foto}" alt="Post" class="post-image">
                 <div class="post-body">
                 <div class="justify-content-between align-center">
                    <h2 class="post-title ">${post.titulo}</h2>
                    <h3 class="post-subtitle ">${post.categoria}</h3>
                    </div>
                    <p class="post-info">Data: ${post.dataCriacao} | Tempo de leitura: ${tempoLeitura} min</p>
                 </div>
                </div>
            </div>
        `;
        postsContainer.innerHTML += card;
    });
}

function verPost(id) {
    window.location.href = `ver-post.html?id=${id}`;
}

carregarPostsHome();
