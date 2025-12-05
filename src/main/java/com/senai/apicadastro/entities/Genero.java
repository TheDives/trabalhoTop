package com.senai.apicadastro.entities;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
public class Genero {
	
	@Entity
	@Table(name = "tb_genero")
	public class genero {
		
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private Long id;
		
		@NotBlank(message = "O gênero da musica é obrigatório")
		@Column(name = "genero_musica")
		private String generoMusica;
		
		@NotBlank(message = "A história do genero não deve estar vazia.")
		@Column(name = "historia_genero", nullable = false)
		private String historiaGenero;
		
		@JsonIgnore
	    @OneToMany(mappedBy = "generoMusica")
	    private List<Musica> musicas;
	    
	    
		public genero() {}

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getGeneroMusica() {
			return generoMusica;
		}

		public void setGeneroMusica(String generoMusica) {
			this.generoMusica = generoMusica;
		}
		
		public String getHistoriaGenero() {
			return historiaGenero;
		}
		
		public void setHistoriaGenero(String historiaGenero) {
			this.historiaGenero = historiaGenero;
		}
		
		

	}


}

