const API_URL = "http://localhost:8080/musicas";

function openModal() {
    document.getElementById("modal-bg").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal-bg").style.display = "none";
}

async function carregarMusicas() {
    const response = await fetch(API_URL);
    const musicas = await response.json();

    const musicGrid = document.getElementById("musicGrid");

    // remove músicas antigas, exceto o botão
    const botoes = document.querySelector(".add-button");
    musicGrid.innerHTML = "";
    musicGrid.appendChild(botoes);

    musicas.forEach(m => {
        const item = document.createElement("a");
        item.classList.add("music-item");
        item.href = m.link;
        item.target = "_blank";

        item.innerHTML = `
            <img src="${m.imagem}">
            <figcaption>${m.titulo} - ${m.artista} (${m.ano})</figcaption>
        `;

        musicGrid.insertBefore(item, botoes);
    });
}

async function cadastrarMusica() {
    const titulo = document.getElementById("titulo").value.trim();
    const artista = document.getElementById("artista").value.trim();
    const ano = document.getElementById("ano").value.trim();
    const imagem = document.getElementById("imagem").value.trim();
    const link = document.getElementById("link").value.trim();

    if (!titulo || !artista || !ano || !imagem || !link) {
        alert("Preencha todos os campos!");
        return;
    }

    const musica = { titulo, artista, ano, imagem, link };

    await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(musica)
    });

    closeModal();
    carregarMusicas(); // atualiza automaticamente

    // limpa campos
    document.getElementById("titulo").value = "";
    document.getElementById("artista").value = "";
    document.getElementById("ano").value = "";
    document.getElementById("imagem").value = "";
    document.getElementById("link").value = "";
}

// carregar músicas ao abrir a página
window.onload = carregarMusicas;