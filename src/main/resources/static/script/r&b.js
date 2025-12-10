function openModal() {
  document.getElementById("modal-bg").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal-bg").style.display = "none";
}

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
    .then(() => listarMusicas());

    closeModal();
}

function listarMusicas() {
    fetch("http://localhost:8080/api/musicas")
        .then(res => res.json())
        .then(musicas => {
            let html = "";

            musicas.forEach(m => {
                html += `
                    <a class="music-item" href="${m.link}" target="_blank">
                        <img src="${m.imagem}" alt="${m.titulo}">
                        <figcaption>${m.titulo} - ${m.artista} (${m.ano})</figcaption>
                    </a>
                `;
            });

            document.getElementById("musicGrid").innerHTML = html;
        });
}

window.onload = listarMusicas;