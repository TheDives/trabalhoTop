const API_URL = "http://localhost:8080/musicas";
const modal = document.getElementById("modal-bg");

function openModal(id = null, titulo = '', artista = '', ano = '', imagem = '', link = '') {
    // Se id é null, estamos cadastrando. Se id existe, estamos editando.
    document.getElementById("musicaId").value = id || '';
    document.getElementById("titulo").value = titulo;
    document.getElementById("artista").value = artista;
    document.getElementById("ano").value = ano;
    document.getElementById("imagem").value = imagem;
    document.getElementById("link").value = link;

    document.getElementById("modal-title").innerText = id ? "Editar Música" : "Adicionar Música";
    document.getElementById("save-button").innerText = id ? "Salvar Alterações" : "Salvar";

    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}

function criarItemMusica(m) {
    const item = document.createElement("a");
    item.classList.add("music-item");
    item.href = m.link;
    item.target = "_blank";

    const figureContent = `
        <img src="${m.imagem}">
        <figcaption>${m.titulo} - ${m.artista} (${m.ano})</figcaption>
    `;
    item.innerHTML = figureContent;
    
    // Adicionar botões de Excluir e Editar
    const actionButtons = document.createElement("div");
    actionButtons.classList.add("music-actions");
    
    // Botão de Excluir
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "🗑️";
    deleteBtn.onclick = (e) => {
        e.preventDefault(); // Impede que o clique abra o link
        removerMusica(m.id, m.titulo);
    };

    // Botão de Editar
    const editBtn = document.createElement("button");
    editBtn.innerHTML = "✏️";
    editBtn.onclick = (e) => {
        e.preventDefault(); // Impede que o clique abra o link
        openModal(m.id, m.titulo, m.artista, m.ano, m.imagem, m.link);
    };

    actionButtons.appendChild(editBtn);
    actionButtons.appendChild(deleteBtn);

    item.appendChild(actionButtons);

    return item;
}

async function carregarMusicas() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`Erro de rede: ${response.status}`);
        }
        const musicas = await response.json();
        const apiMusicGrid = document.getElementById("api-music-grid");

        // 1. Limpa APENAS a grade DINÂMICA (API)
        apiMusicGrid.innerHTML = ""; 

        // 2. Insere as músicas da API na grade dinâmica
        musicas.forEach(m => {
            const item = criarItemMusica(m);
            apiMusicGrid.appendChild(item);
        });

    } catch (error) {
        console.error("Erro ao carregar músicas da API:", error);
        // Opcional: Mostrar uma mensagem de erro na tela
    }
}

async function salvarMusica() {
    const id = document.getElementById("musicaId").value;
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
    
    // Define o método: POST para novo, PUT para edição
    const method = id ? 'PUT' : 'POST';
    const url = id ? `${API_URL}/${id}` : API_URL;

    try {
        const response = await fetch(url, {
            method: method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(musica)
        });

        if (!response.ok) {
            alert(`Erro ao salvar: ${response.statusText}. Verifique o console do Spring Boot.`);
            return;
        }

        closeModal();
        carregarMusicas(); // atualiza automaticamente

    } catch (error) {
        console.error("Erro na operação de salvar/editar:", error);
    }
}

async function removerMusica(id, titulo) {
    if (!confirm(`Tem certeza que deseja remover a música "${titulo}"?`)) {
        return;
    }
    
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            alert(`Erro ao remover: ${response.statusText}. Verifique o console do Spring Boot.`);
            return;
        }

        carregarMusicas(); // atualiza automaticamente
        
    } catch (error) {
        console.error("Erro na operação de remover:", error);
    }
}

// Inicia o carregamento ao abrir a página
window.onload = carregarMusicas;
