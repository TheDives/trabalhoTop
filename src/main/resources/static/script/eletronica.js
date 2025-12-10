// Abre modal
function openModal() {
    document.getElementById("modal-bg").style.display = "flex";
}

// Fecha modal
function closeModal() {
    document.getElementById("modal-bg").style.display = "none";
}

// Cadastra música no backend
function cadastrarMusica() {
    const musica = {
        titulo: document.getElementById("titulo").value,
        artista: document.getElementById("artista").value,
        ano: document.getElementById("ano").value,
        imagem: document.getElementById("imagem").value,
        link: document.getElementById("link").value
    };

    fetch("http://localhost:8080/api/musicas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(musica)
    })
        .then(() => listarMusicas()); // lista novamente após cadastrar

    closeModal(); // fecha modal
}

// Lista músicas na tela
function listarMusicas() {
    fetch("http://localhost:8080/api/musicas")
        .then(res => res.json())
        .then(musicas => {
            let html = "";

            musicas.forEach(m => {
                html += `
                    <div class="music-item">
                        <a href="${m.link}" target="_blank">
                            <img src="${m.imagem}" alt="${m.titulo}">
                            <figcaption>${m.titulo} - ${m.artista} (${m.ano})</figcaption>
                        </a>

                        <button class="btn-delete" onclick="deletarMusica(${m.id})">
                            Deletar
                        </button>
                    </div>
                `;
            });

            document.getElementById("musicGrid").innerHTML = html;
        });
}

// Deleta música no backend
function deletarMusica(id) {
    fetch(`http://localhost:8080/api/musicas/${id}`, {
        method: "DELETE"
    })
    .then(() => listarMusicas())  // atualiza lista após excluir
    .catch(err => console.error("Erro ao deletar música:", err));
}


// Carrega automaticamente ao abrir o site
window.onload = listarMusicas;
