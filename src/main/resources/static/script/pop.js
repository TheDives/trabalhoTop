let editandoId = null;

// Abre modal
function openModal(musica = null) {
    document.getElementById("modal-bg").style.display = "flex";

    if (musica) {
        editandoId = musica.id;
        document.getElementById("titulo").value = musica.titulo;
        document.getElementById("artista").value = musica.artista;
        document.getElementById("ano").value = musica.ano;
        document.getElementById("imagem").value = musica.imagem;
        document.getElementById("link").value = musica.link;
    } else {
        editandoId = null;
        document.getElementById("titulo").value = "";
        document.getElementById("artista").value = "";
        document.getElementById("ano").value = "";
        document.getElementById("imagem").value = "";
        document.getElementById("link").value = "";
    }
}

// Fecha modal
function closeModal() {
    document.getElementById("modal-bg").style.display = "none";
}

// Salvar (criar ou editar)
function salvarMusica() {
    const musica = {
        titulo: document.getElementById("titulo").value,
        artista: document.getElementById("artista").value,
        ano: document.getElementById("ano").value,
        imagem: document.getElementById("imagem").value,
        link: document.getElementById("link").value
    };

    let url = "http://localhost:8080/api/musicas";
    let metodo = "POST";

    if (editandoId) {
        url = `http://localhost:8080/api/musicas/${editandoId}`;
        metodo = "PUT";
    }

    fetch(url, {
        method: metodo,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(musica)
    })
    .then(() => {
        listarMusicas();
        closeModal();
    });
}

// LISTAR (sem apagar as músicas originais)
function listarMusicas() {
    fetch("http://localhost:8080/api/musicas")
        .then(res => res.json())
        .then(musicas => {

            // mantém o conteúdo original
            const grid = document.getElementById("musicGrid");

            // remove apenas os itens criados pelo backend
            document.querySelectorAll(".music-item.backend").forEach(e => e.remove());

            // adiciona músicas vindas do backend
            musicas.forEach(m => {
                const div = document.createElement("div");
                div.classList.add("music-item", "backend");

                div.innerHTML = `
                    <a href="${m.link}" target="_blank">
                        <img src="${m.imagem}">
                        <figcaption>${m.titulo} - ${m.artista} (${m.ano})</figcaption>
                    </a>

                    <button class="edit-btn" onclick='openModal(${JSON.stringify(m)})'>Editar</button>
                    <button class="btn-delete" onclick="deletarMusica(${m.id})">Excluir</button>
                `;

                // insere ANTES do botão + adicionar música
                grid.insertBefore(div, document.getElementById("addMusicCard"));
            });
        });
}

// DELETAR
function deletarMusica(id) {
    fetch(`http://localhost:8080/api/musicas/${id}`, {
        method: "DELETE"
    })
    .then(() => listarMusicas());
}

// Carregar ao abrir
window.onload = listarMusicas;