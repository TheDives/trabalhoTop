package com.senai.apicadastro.services;

import java.util.List;
import java.util.Optional;

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
    
    public Optional<Musica> buscarPorId(Long id) {
        return repository.findById(id);
    }
    
    public Musica salvar(Musica musica) {
        return repository.save(musica);
    }
    
    public Musica atualizar(Long id, Musica novaMusica) {
        // Verifica se existe antes de tentar editar
        return repository.findById(id).map(musicaExistente -> {
            musicaExistente.setTituloMusica(novaMusica.getTituloMusica());
            musicaExistente.setDataLancamento(novaMusica.getDataLancamento());
            musicaExistente.setCapaUrl(novaMusica.getCapaUrl());
            musicaExistente.setNomeCantor(novaMusica.getNomeCantor());
            musicaExistente.setLinkYoutube(novaMusica.getLinkYoutube());
            
            // Atualiza o gênero se ele vier no JSON
            if(novaMusica.getGenero() != null) {
                musicaExistente.setGenero(novaMusica.getGenero());
            }

            return repository.save(musicaExistente);
        }).orElse(null); // Retorna null se não achar, controller trata isso
    }
    
    public boolean delete(Long id) {
        if(repository.existsById(id)) {
            repository.deleteById(id);
            return true;
        }
        return false;
    }
}

	

		