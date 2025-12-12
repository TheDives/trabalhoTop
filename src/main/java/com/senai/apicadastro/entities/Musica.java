package com.senai.apicadastro.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name = "tb_musica")
public class Musica {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_musica")
    private Long id;

    @NotBlank(message = "O título é obrigatório.")
    @Column(name = "titulo_musica", nullable = false)
    private String tituloMusica;

    @Min(value = 2000, message = "O ano deve ser posterior a 2000")
    @Column(name = "data_lancamento", nullable = false)
    private int dataLancamento;

    @NotBlank(message = "O artista não deve estar vazio.")
    @Column(name = "nome_cantor", nullable = false)
    private String nomeCantor;


    @Column(name = "capa_url")
    private String capaUrl;
    
    @Column(name = "link_youtube")
    private String linkYoutube;
    
    @ManyToOne
    @JoinColumn(name = "fk_genero")
    private Genero genero;

    // Getters e Setters
    public Musica() {
    	
    }

    public Musica (String tituloMusica, int dataLancamento, String nomeCantor, String capaUrl, String linkYoutube) {
    	this.tituloMusica = tituloMusica;
    	this.dataLancamento = dataLancamento;
    	this.nomeCantor = nomeCantor;
    	this.capaUrl = capaUrl;
    	this.linkYoutube = linkYoutube;
    }

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

	public int getDataLancamento() {
		return dataLancamento;
	}

	public void setDataLancamento(int dataLancamento) {
		this.dataLancamento = dataLancamento;
	}

	public String getNomeCantor() {
		return nomeCantor;
	}

	public void setNomeCantor(String nomeCantor) {
		this.nomeCantor = nomeCantor;
	}

	public String getCapaUrl() {
		return capaUrl;
	}

	public void setCapaUrl(String capaUrl) {
		this.capaUrl = capaUrl;
	}

	public String getLinkYoutube() {
		return linkYoutube;
	}

	public void setLinkYoutube(String linkYoutube) {
		this.linkYoutube = linkYoutube;
	}

	public Genero getGenero() {
		return genero;
	}

	public void setGenero(Genero genero) {
		this.genero = genero;
	}
}