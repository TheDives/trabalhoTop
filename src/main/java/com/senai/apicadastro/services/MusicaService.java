package com.senai.apicadastro.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.senai.apicadastro.entities.Musica;
import com.senai.apicadastro.repositories.MusicaRepository;

@Service
public class MusicaService {
	

		@Autowired
		private MusicaRepository repository;
		
		public List<Musica> listar(){
			return repository.findAll();
		}
		
		public Musica buscarPorId(Long id) {
			return repository.findById(id).orElse(null);
		}
		
		public Musica salvar(Musica musica) {
			return repository.save(musica);
		}
		
		public Musica atualizar(Long id, Musica novaMusica) {
			Musica antigaMusica = repository.findById(id).orElse(null);
			
			antigaMusica.setTituloMusica(novaMusica.getTituloMusica());
			antigaMusica.setDataLancamento(novaMusica.getDataLancamento());
			antigaMusica.setCapaUrl(novaMusica.getCapaUrl());
			antigaMusica.setNomeCantor(novaMusica.getNomeCantor());
			
			return repository.save(antigaMusica);
			
		}
		
		public void delete(Long id) {
			repository.deleteById(id);
		}

	}






