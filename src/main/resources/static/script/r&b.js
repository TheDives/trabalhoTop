const API_URL = "http://localhost:8080/musicas";
const modal = document.getElementById("modal-bg");


 // Abre o modal e preenche os campos se um ID for fornecido (modo Edição).
function openModal(id = null, titulo = '', artista = '', ano = '', imagem = '', link = '') {
    // Preenche campos do modal
    document.getElementById("musicaId").value = id || '';
    document.getElementById("titulo").value = titulo;
    document.getElementById("artista").value = artista;
    document.getElementById("ano").value = ano;
    document.getElementById("imagem").value = imagem;
    document.getElementById("link").value = link;

    // Atualiza o título e o botão de salvar
    document.getElementById("modal-title").innerText = id ? "Editar Música" : "Adicionar Música";
    document.getElementById("save-button").innerText = id ? "Salvar Alterações" : "Salvar";

    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}
//Cria o elemento HTML completo para uma única música, incluindo os botões de ação.

function salvarMusica(m) {
    // O item principal é um link (anchor)
    const item = document.createElement("a");
    item.classList.add("music-item");
    item.href = m.link;
    item.target = "_blank"; // Abre o link em nova aba

    // Conteúdo da figura
    const figureContent = `
        <img src="${m.imagem}">
        <figcaption>${m.titulo} - ${m.artista} (${m.ano})</figcaption>
    `;
    item.innerHTML = figureContent;
    
    // Contêiner para os botões de ação
    const actionButtons = document.createElement("div");
    actionButtons.classList.add("music-actions");
    
    // Botão de Excluir
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "🗑️";
    deleteBtn.title = "Excluir Música";
    deleteBtn.onclick = (e) => {
        e.preventDefault(); // Impede o clique de abrir o link (<a>)
        removerMusica(m.id, m.titulo);
    };

    // Botão de Editar
    const editBtn = document.createElement("button");
    editBtn.innerHTML = "✏️";
    editBtn.title = "Editar Música";
    editBtn.onclick = (e) => {
        e.preventDefault(); // Impede o clique de abrir o link (<a>)
        // Chama openModal com todos os dados preenchidos para edição
        openModal(m.id, m.titulo, m.artista, m.ano, m.imagem, m.link);
    };

    actionButtons.appendChild(editBtn);
    actionButtons.appendChild(deleteBtn);

    item.appendChild(actionButtons);

    return item;
}


 //Busca todas as músicas na API e as renderiza no grid dinâmico.

async function carregarMusicas() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`Erro de rede ao listar músicas: ${response.status}`);
        }
        const musicas = await response.json();
        const apiMusicGrid = document.getElementById("api-music-grid");

        // 1. Limpa APENAS a grade DINÂMICA (Músicas da API)
        apiMusicGrid.innerHTML = ""; 

        // 2. Insere as músicas da API na grade dinâmica
        musicas.forEach(m => {
            const item = criarItemMusica(m);
            apiMusicGrid.appendChild(item);
        });

    } catch (error) {
        console.error("Erro ao carregar músicas da API:", error);
    }
}

// Salva ou edita uma música (POST ou PUT).

function listar() {
    fetch("http://localhost:8080/musicas") // busca as musicas
        .then(res => res.json()) // converte JSON
        .then(musicas => {
            let html = ""; // html da listagem

            musicas.forEach(m => { // percorre cada musica
                html += `
                  <div class="music-item">
                    <img src="${m.imagem}" alt="${m.imagem}"> <!-- capa -->
                    <link src= "${m.link}" alt="${m.link}"> <!-- link -->
                    <strong>${m.artista}</strong> <br> <!-- artista -->
                    <strong>${m.titulo}</strong> <br> <!-- titulo -->
                    (${m.ano || ""}) <!-- ano -->
                  </div>
                `;
            });

            document.getElementById("musicGrid").innerHTML = html; // renderiza
        });
}

//Remove uma música (DELETE).
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

        carregarMusicas(); // Atualiza a lista
        alert(`Música "${titulo}" removida com sucesso!`);
        
    } catch (error) {
        console.error("Erro na operação de remover:", error);
        alert("Erro de conexão com o servidor. Verifique o console.");
    }
}
// Inicia o carregamento das músicas da API ao abrir a página
window.onload = carregarMusicas;