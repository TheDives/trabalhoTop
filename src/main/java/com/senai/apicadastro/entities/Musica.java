package com.senai.apicadastro.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "tb_musicas")
public class Musica {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "O título é obrigatório.")
    @Column(name = "titulo_musica", nullable = false)
    private String tituloMusica;

    @NotBlank(message = "O nível de popularidade não deve estar vazio.")
    @Size(min = 1, max = 5, message = "A música não deve ultrapassar 5 estrelas.")
    @Column(name = "nivel_popularidade", nullable = false, length = 5)
    private String nivelPopularidade;

    @Min(value = 2000, message = "O ano deve ser posterior a 2000")
    @Column(nullable = false)
    private int ano;

    @NotBlank(message = "O artista não deve estar vazio.")
    @Column(name = "nome_artista", nullable = false)
    private String nomeArtista;

    private String cantor;

    @Column(name = "capa_url")
    private String capaUrl;

    // Getters e Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTituloMusica() {
        return tituloMusica;
    }

    public void setTituloMusica(String tituloMusica) {
        this.tituloMusica = tituloMusica;
    }

    public String getNivelPopularidade() {
        return nivelPopularidade;
    }

    public void setNivelPopularidade(String nivelPopularidade) {
        this.nivelPopularidade = nivelPopularidade;
    }

    public int getAno() {
        return ano;
    }

    public void setAno(int ano) {
        this.ano = ano;
    }

    public String getNomeArtista() {
        return nomeArtista;
    }

    public void setNomeArtista(String nomeArtista) {
        this.nomeArtista = nomeArtista;
    }

    public String getCantor() {
        return cantor;
    }

    public void setCantor(String cantor) {
        this.cantor = cantor;
    }

    public String getCapaUrl() {
        return capaUrl;
    }

    public void setCapaUrl(String capaUrl) {
        this.capaUrl = capaUrl;
    }
}
