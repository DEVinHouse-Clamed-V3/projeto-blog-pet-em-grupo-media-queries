function loadPosts() {
    const postsTableBody = document.querySelector('#postsTable tbody');
    let posts = JSON.parse(localStorage.getItem('posts')) || [];

    postsTableBody.innerHTML = ''; // Limpa a tabela

    if (posts.length === 0) {
        const emptyRow = document.createElement('tr');
        const emptyCell = document.createElement('td');
        emptyCell.setAttribute('colspan', '6');
        emptyCell.textContent = 'Nenhum post encontrado.';
        emptyRow.appendChild(emptyCell);
        postsTableBody.appendChild(emptyRow);
    } else {
        posts.forEach((post, index) => {
            const row = document.createElement('tr');

            const fotoCell = document.createElement('td');
            const fotoImg = document.createElement('img');
            fotoImg.setAttribute('src', post.foto);
            fotoImg.setAttribute('alt', post.titulo);
            fotoImg.style.width = '100px';
            fotoImg.style.height = '100px';
            fotoCell.appendChild(fotoImg);
            row.appendChild(fotoCell);

            const tituloCell = document.createElement('td');
            tituloCell.textContent = post.titulo;
            row.appendChild(tituloCell);

            const descricaoCell = document.createElement('td');
            descricaoCell.textContent = post.descricao;
            row.appendChild(descricaoCell);

            const categoriaCell = document.createElement('td');
            categoriaCell.textContent = post.categoria;
            row.appendChild(categoriaCell);

            const dataCriacaoCell = document.createElement('td');
            dataCriacaoCell.textContent = post.dataCriacao
            row.appendChild(dataCriacaoCell);

         

            const actionCell = document.createElement('td');
            const deleteButton = document.createElement('button');
            deleteButton.classList.add('btn-danger');
            deleteButton.textContent = 'Deletar';
            deleteButton.onclick = () => deletePost(index);
            actionCell.appendChild(deleteButton);
            row.appendChild(actionCell);

            postsTableBody.appendChild(row);
        });
    }
}

function deletePost(index) {
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts = posts.filter((post, i) => i !== index);
    localStorage.setItem('posts', JSON.stringify(posts));
    loadPosts();
}

document.addEventListener('DOMContentLoaded', loadPosts);
