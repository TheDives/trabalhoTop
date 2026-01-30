DROP DATABASE IF EXISTS db_lismelt;
CREATE DATABASE db_lismelt;
USE db_lismelt;

-- Criação das Tabelas
CREATE TABLE tb_genero (
    id_genero INT AUTO_INCREMENT PRIMARY KEY,
    titulo_genero VARCHAR(100) NOT NULL
);

CREATE TABLE tb_musica (
    id_musica INT AUTO_INCREMENT PRIMARY KEY,
    nome_cantor VARCHAR(100) NOT NULL,
    titulo_musica VARCHAR(100) NOT NULL,
    data_lancamento YEAR,
    capa_url VARCHAR(255), -- Aumentei para 255 pois links costumam ser grandes
    link_youtube VARCHAR(255),
    fk_genero INT,
    CONSTRAINT fk_musica_genero FOREIGN KEY (fk_genero) REFERENCES tb_genero(id_genero)
);

-- 2. Inserção de Gêneros
INSERT INTO tb_genero (titulo_genero) VALUES 
('Pop'), ('Rock Alternativo'), ('R&b'), ('Hip-Hop'), 
('Dance/Eletronica'), ('Sertanejo'), ('Funk Carioca'), ('Reggae');

INSERT INTO tb_musica (nome_cantor, titulo_musica, data_lancamento, capa_url, link_youtube, fk_genero)
VALUES
-- Pop
('Britney Spears', 'Oops!... I Did It Again', 2000, 'https://upload.wikimedia.org/wikipedia/pt/thumb/4/44/Capa_de_Oops_It_Did_Again_de_Britney_Spears_%282000%29.jpg/250px-Capa_de_Oops_It_Did_Again_de_Britney_Spears_%282000%29.jpg', 'https://www.youtube.com/watch?v=CduA0TULnow', 1),
('Christina Aguilera', 'Genie in a Bottle', 2000, 'https://upload.wikimedia.org/wikipedia/pt/0/03/Genieinabottle1.jpg', 'https://www.youtube.com/watch?v=kIDWgqDBNXA', 1),
('Britney Spears', 'Toxic', 2003, 'https://upload.wikimedia.org/wikipedia/pt/e/ec/BS_Toxic.png', 'https://www.youtube.com/watch?v=LOZuxwVk7TU', 1),

-- Rock alternativo
('Evanescence', 'Bring Me To Life', 2003, 'https://i1.sndcdn.com/artworks-XD56pxutV4MWxbyP-zQwD5A-t1080x1080.jpg', 'https://www.youtube.com/watch?v=3YxaaGgTQYM', 2),
('The White', 'Seven Nation Army', 2003, 'https://f4.bcbits.com/img/a1219460964_16.jpg', 'https://www.youtube.com/watch?v=0J2QdDbelmY', 2),
('The Killers', 'Brightside', 2004, 'https://upload.wikimedia.org/wikipedia/pt/c/c7/TK_Mr.-Brightside.jpg', 'https://www.youtube.com/watch?v=gGdGFtwCNBE', 2),

-- Hip hop
('Usher', 'Yeah!', 2004,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSrc9aGodvJteHnXdi_QPfAtBXzvgzCuzaEQ&s','https://youtu.be/GxBSyx85Kp8?si=_UfiM4UkrQVsZ8p9', 3),
('50 Cent', 'In Da Club', 2003,'https://m.media-amazon.com/images/I/81NfayQcQgL._UF1000,1000_QL80_.jpg','https://youtu.be/MYxAiK6VnXw?si=QPJFtiXo9g1akRhX', 3),
('Poison', 'Bell Biv DeVoe', 2009,'https://upload.wikimedia.org/wikipedia/pt/7/73/Get_Rich_or_Die_Tryin%27.jpg','https://youtu.be/5qm8PH4xAss?si=I5qZH9XPtdSmQNFL', 3),

-- Eletrônica
('Kasino', 'Cant get over', 2005, 'https://akamai.sscdn.co/uploadfile/letras/albuns/4/b/b/b/9457.jpg', 'https://youtu.be/-wZl_ZhnVg4?si=du6qERLv7_foHoFS', 4),
('Cascada', 'Everytime We Touch', 2006, 'https://i.discogs.com/uJ2ePQf_3ot_aSSAzav1bKR84l4xJkddgrUnKs4Bnyk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5ODQy/NjUtMTM2NDY1MjIy/NC0xNjM2LmpwZWc.jpeg', 'https://youtu.be/4G6QDNC4jPs?si=yJ7kkVaaNsoji_sL', 4),
('Ian Van Dahl', 'Castles In The Sky', 2002, 'https://i.discogs.com/vltLhvu06hTyKDhYzrb9h7kdSRNlkRUaETSkKF3X3q4/rs:fit/g:sm/q:90/h:590/w:596/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY1OTcw/My0xMjk4ODk4OTg3/LmpwZWc.jpeg', 'https://youtu.be/0aa7KWLkzXc?si=TcShCo0se3taRNuY', 4),

-- Sertanejo
('Rionegro & Solimões', 'Peão Apaixonado', 2007, 'https://i.ytimg.com/vi/OuIqrlyd5eo/maxresdefault.jpg', 'https://www.youtube.com/watch?v=SccKqbiX0uk', 5),
('César Menotti & Fabiano', 'Leilão', 2009, 'https://i.ytimg.com/vi/yemO63o9GUY/maxresdefault.jpg', 'https://www.youtube.com/watch?v=yemO63o9GUY', 5),
('João Bosco & Vinicius', 'Falando Sério', 2007, 'https://i.ytimg.com/vi/Y-OLwxxNxjA/maxresdefault.jpg', 'https://www.youtube.com/watch?v=26Ey7XNS7WE&list=PLqmKfvQ04QcWlwtxIdkYfo_EbHoyIArpc&index=13', 5),

-- R&B 
('Sade', 'By Your Side', 2000, 'https://i.discogs.com/k7oq1IVtFk9G6RAEq8z04iztEwNqfLnZRS8te-9RDSo/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2MzA0/ODAtMTQ1MTMxMTk3/MS0zNzEzLmpwZWc.jpeg', 'https://www.youtube.com/watch?v=C8QJmI_V3j4', 6),
('Aaliyah', 'Try Again', 2000,'https://upload.wikimedia.org/wikipedia/en/1/13/Try_Again.png','https://www.youtube.com/watch?v=qTA0RuZoIxM', 6),
('Destinys Child', 'Survivor', 2001,'https://akamai.sscdn.co/tb/letras-blog/wp-content/uploads/2021/09/d2ce8a9-destinys-child-survivor-1024x1024.jpg','https://www.youtube.com/watch?v=Wmc8bQoL-J0', 6),

-- FUNK 
('Anitta e Furacão', 'Eu Vou Ficar', 2010, 'https://i.scdn.co/image/ab67616d0000b273384b99472e1e842cb05b9009', 'https://www.youtube.com/watch?v=vDoeoOFCa_U', 7),
('Bonde do Tigrão', 'O Baile Todo', 2001, 'https://i.ytimg.com/vi/x4bcm_TbldA/maxresdefault.jpg', 'https://www.youtube.com/watch?v=x4bcm_TbldA', 7),
('Mc Créu', 'Dança do Créu', 2009, 'https://cdn-images.dzcdn.net/images/cover/25ebf275aa75accf89c891f2071a1c81/0x1900-000000-80-0-0.jpg', 'https://www.youtube.com/watch?v=vdvlU4cjLc8', 7),

-- REGGAE
('Bob Marley vs Funkstar de Luxe Remix', 'Sun Is Shining', 2000, 'https://i.discogs.com/UVWX2x8kG_1RLwwMU6xWdhsgHrzfzl4z83sMiUzmbpY/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTkwMTMx/LTEyNzMyMjUwMzcu/anBlZw.jpeg', 'https://www.youtube.com/watch?v=9kPQV64eNrk', 8),
('O Rappa', 'Súplica Cearense', 2008, 'https://i.scdn.co/image/ab67616d0000b273cce162d33dd0504fe7815155', 'https://www.youtube.com/watch?v=F19PnbWigSA', 8),
('Cidade Negra', 'Girassol', 2002, 'https://i.scdn.co/image/ab67616d0000b27325c789710ee16985b2b5272d', 'https://www.youtube.com/watch?v=zPCfiYf6yis', 8);

select * from tb_musica;