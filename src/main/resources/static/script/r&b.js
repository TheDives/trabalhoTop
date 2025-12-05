function openModal() {
  document.getElementById("modal-bg").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal-bg").style.display = "none";
}

function addMusic() {
  const titulo = document.getElementById("titulo").value;
  const artista = document.getElementById("artista").value;
  const ano = document.getElementById("ano").value;
  const imagem = document.getElementById("imagem").value;
  const link = document.getElementById("link").value;

  if (!titulo || !artista || !ano || !imagem || !link) {
    alert("Preencha todos os campos!");
    return;
  }

  const card = document.createElement("a");
  card.className = "music-item";
  card.href = link;
  card.target = "_blank";

  card.innerHTML = `
    <img src="${imagem}">
    <figcaption>${titulo} - ${artista} (${ano})</figcaption>
  `;

  document.getElementById("musicGrid").appendChild(card);

  closeModal();
  
  document.getElementById("titulo").value = "";
  document.getElementById("artista").value = "";
  document.getElementById("ano").value = "";
  document.getElementById("imagem").value = "";
  document.getElementById("link").value = "";
}