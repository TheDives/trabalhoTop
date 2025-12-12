# **Projeto Integrados – Sistema de cadastro de músicas**

### *Trabalho acadêmico — Desenvolvimento Full Stack (Frontend + Backend + Banco + Documentação)*

Este repositório contém todas as etapas, artefatos, códigos e documentações produzidas durante o desenvolvimento do Sistema de cadastro de músicas, seguindo o cronograma de 4 semanas de entregas.

O projeto foi desenvolvido como integrador entre as disciplinas desenvolvidas no 2º Semestre do Curso de Desenvolvimento de Sistemas no SENAI Gaspar Ricardo Junior - CFP 402 - Sorocaba/SP

Professor Instrutor: [Vedilson Prado](https://github.com/vedilsonprado)

---
# 🧑‍💻 **Desenvolvedores:**
Nome Dev 01: [Isabella Minhão](https://github.com/isabellaminhao)
Nome Dev 02: [Laura Fontes](https://github.com/Laurafont3s)
Nome Dev 03: [Leticia Gomes](https://github.com/leticiagomes27)
Nome Dev 04: [Luana Costa](https://github.com/luanacostta)
Nome Dev 05: [Maria Benini](https://github.com/maribenini)
Nome Dev 06: [Stephanie Favero](https://github.com/stephaniefavero)
---

## 🛠️ Tecnologias e Ferramentas
![Java](https://skillicons.dev/icons?i=java,spring,js,html,css,mysql)
---

# 📁 **Estrutura do Repositório**

```
📦 projeto-filmes
├── backend/
│   ├── src/
│   ├── pom.xml
│   ├── README.md
│   ├── mvnw.cmd
│   ├── mvnw
│   └── application.properties
├── frontend/
│   ├── homePage.html
│   ├── generos.html
│   ├── eletronica.html
│   ├── funkCarioca.html
│   ├── hip-hop.html
│   ├── pop.html
│   ├── r&b.html
│   ├── reggae.html
│   ├── rockAlternativo.html
│   ├── sertanejo.html
│   └── scripts/
│   ├── homePage.script
│   ├── generos.script
│   ├── eletronica.script
│   ├── funkCarioca.script
│   ├── hip-hop.script
│   ├── pop.script
│   ├── r&b.script
│   ├── reggae.script
│   ├── rockAlternativo.script
│   ├── sertanejo.script
├── docs/
│   ├── requisitos.docx
│   ├── uml/
│   ├── der/
│   ├── prototipos/
│   └── banco.sql
└── README.md
```

---

# 🛠️ **Guia de Instalação e Execução**

## **Backend (Spring Boot)**

### **1. Configurar banco no `application.properties`**

```
spring.datasource.url=jdbc:mysql://localhost:3306/db_lismelt?useSSL=true
spring.datasource.username=root
spring.datasource.password=12345
spring.jpa.hibernate.ddl-auto=update

```

### **2. Rodar o backend**

---

# 🌐 **Documentação da API**

## **Entidades**

### **🎭 Gênero**

```json
{
  "id": 1,
  "name": "Ação"
}
```

### **🎬 Filme**

```json
{
"tituloMusica": "Kiss Kiss",
"daraLancamento": 2007,
"noneCantor": "Chris Brown, feat T-Pain",
"capaUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGWVdnn0aC-jjku50rQLsrcdjS_Nz7eNT_Tw&s",
"linkYoutube": null,
"genero":{
    "generoMusica": "R&B,
    }
}
```

---

# 📡 **Endpoints**

## **Genero**

| Método | Endpoint | Descrição |
| --- | --- | --- |
| GET | /generos | Lista todos |
| POST | /generos | Cria novo |
| PUT | /generos/{id} | Atualiza |
| DELETE | /generos/{id} | Remove |

## **Musica**

| Método | Endpoint | Descrição |
| --- | --- | --- |
| GET | /musica | Lista todos |
| POST | /musica | Cria |
| PUT | /musica/{id} | Atualiza |
| DELETE | /musica/{id} | Remove |

---

# 🖥️ **Exemplos de Requisição**

### **POST /musicas**

```json
{
  "tituloMusica": "Kiss Kiss",
  "dataLancamento": 2007,
  "nomeCantor": "Chris Brown",
  "capaUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGWVdnn0aC-jjku50rQLsrcdjS_Nz7eNT_Tw&s",
  "linkYoutube": null,
  "genero": {
    "generoMusica": "R&B"
    "id": 3
  }

  "id": 97

}
```

---

# 📎 **Links Importantes**

🔗 **Trello:** *https://trello.com/b/UtkU59Dn/anos-2000-the-dives*

🔗 **Figma:** *https://www.figma.com/design/E6REZNcDf0ZnFBbyW0ZWna/Sem-t%C3%ADtulo?node-id=1-1375&m=dev&t=USEPGhWBOOwPj3cM-1*

