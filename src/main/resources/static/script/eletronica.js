const API_URL = "http://localhost:8080/musicas"; // Ajuste a porta se necessário

function openModal(id = null) {
    document.getElementById('modal-bg').style.display = 'flex';
    if (id) {
        // Modo Edição: Busca os dados para preencher o form
        fetch(`${API_URL}/${id}`)
            .then(res => res.json())
            .then(m => {
                document.getElementById('musicaId').value = m.id;
                document.getElementById('titulo').value = m.titulo;
                document.getElementById('artista').value = m.artista;
                document.getElementById('ano').value = m.ano;
                document.getElementById('imagem').value = m.imagem;
                document.getElementById('link').value = m.link;
                document.getElementById('modal-title').innerText = "Editar Música";
            });
    } else {
        // Modo Cadastro: Limpa o form
        limparFormulario();
        document.getElementById('modal-title').innerText = "+ Adicionar Música";
    }
}

function salvarMusica() {
    const id = document.getElementById('musicaId').value;
    const musica = {
        titulo: document.getElementById('titulo').value,
        artista: document.getElementById('artista').value,
        ano: document.getElementById('ano').value,
        imagem: document.getElementById('imagem').value,
        link: document.getElementById('link').value
    };

    // IDENTIFICAÇÃO DO ERRO: Escolha do método HTTP e URL
    const metodo = id ? 'PUT' : 'POST';
    const url = id ? `${API_URL}/${id}` : API_URL;

    fetch(url, {
        method: metodo,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(musica)
    })
    .then(res => {
        if (res.ok) {
            alert("Sucesso!");
            closeModal();
            location.reload(); // Recarrega para mostrar a alteração
        } else {
            alert("Erro ao salvar música.");
        }
    })
    .catch(err => console.error("Erro na conexão:", err));
}

function closeModal() {
    document.getElementById('modal-bg').style.display = 'none';
    limparFormulario();
}

function limparFormulario() {
    document.getElementById('musicaId').value = "";
    document.getElementById('titulo').value = "";
    document.getElementById('artista').value = "";
    document.getElementById('ano').value = "";
    document.getElementById('imagem').value = "";
    document.getElementById('link').value = "";
}

// Execute isso assim que a página carregar
document.addEventListener("DOMContentLoaded", listarMusicas);

function listarMusicas() {
    fetch(API_URL)
        .then(res => res.json())
        .then(musicas => {
            const grid = document.getElementById('musicGrid');
            // Mantém apenas o botão de "Adicionar" no final, limpa o resto se necessário
            grid.innerHTML = ""; 

            musicas.forEach(m => {
                grid.innerHTML += `
                    <div class="music-item-container">
                        <a class="music-item" href="${m.link}" target="_blank">
                            <img src="${m.imagem}" alt="${m.titulo}">
                            <figcaption>${m.titulo} - ${m.artista} (${m.ano})</figcaption>
                        </a>
                        <div class="acoes">
                            <button class="btn-edit" onclick="openModal(${m.id})">Editar</button>
                            <button class="btn-delete" onclick="excluirMusica(${m.id})">Excluir</button>
                        </div>
                    </div>
                `;
            });

            // Adiciona o botão de "+" ao final
            grid.innerHTML += `
                <div class="music-item add-btn" onclick="openModal()" style="cursor:pointer;">
                    <figcaption>+ Adicionar Música</figcaption>
                </div>
            `;
        });
}

function excluirMusica(id) {
    if (confirm("Tem certeza que deseja excluir esta música?")) {
        fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        })
        .then(res => {
            if (res.ok) {
                alert("Excluída com sucesso!");
                listarMusicas(); // Atualiza a lista sem recarregar a página
            } else {
                alert("Erro ao excluir.");
            }
        });
    }
}

// Execute isso assim que a página carregar
document.addEventListener("DOMContentLoaded", listarMusicas);

function listarMusicas() {
    fetch(API_URL)
        .then(res => res.json())
        .then(musicas => {
            const grid = document.getElementById('musicGrid');
            // Mantém apenas o botão de "Adicionar" no final, limpa o resto se necessário
            grid.innerHTML = ""; 

            musicas.forEach(m => {
                grid.innerHTML += `
                    <div class="music-item-container">
                        <a class="music-item" href="${m.link}" target="_blank">
                            <img src="${m.imagem}" alt="${m.titulo}">
                            <figcaption>${m.titulo} - ${m.artista} (${m.ano})</figcaption>
                        </a>
                        <div class="acoes">
                            <button class="btn-edit" onclick="openModal(${m.id})">Editar</button>
                            <button class="btn-delete" onclick="excluirMusica(${m.id})">Excluir</button>
                        </div>
                    </div>
                `;
            });

            // Adiciona o botão de "+" ao final
            grid.innerHTML += `
                <div class="music-item add-btn" onclick="openModal()" style="cursor:pointer;">
                    <figcaption>+ Adicionar Música</figcaption>
                </div>
            `;
        });
}

function excluirMusica(id) {
    if (confirm("Tem certeza que deseja excluir esta música?")) {
        fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        })
        .then(res => {
            if (res.ok) {
                alert("Excluída com sucesso!");
                listarMusicas(); // Atualiza a lista sem recarregar a página
            } else {
                alert("Erro ao excluir.");
            }
        });
    }
}