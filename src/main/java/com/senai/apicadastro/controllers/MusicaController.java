package com.senai.apicadastro.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.senai.apicadastro.entities.Musica;
import com.senai.apicadastro.services.MusicaService;

@RestController
@RequestMapping("/musicas")
@CrossOrigin(origins = "*")
public class MusicaController {
	
	@Autowired
	private MusicaService service;
	
	@GetMapping
	public List<Musica> listar(){
		return service.listar();
	}
	
	@GetMapping("/{id}")
	public Musica buscar(@PathVariable Long id) {
		return service.buscarPorId(id);
	}
	
	@PostMapping
	public Musica salvar(@RequestBody Musica musica) {
		return service.salvar(musica);
	}
	
	@PutMapping("/{id}")
	public Musica atualizar(@PathVariable Long id, @RequestBody Musica musica) {
		return service.atualizar(id, musica);
	}

	@DeleteMapping("/{id}")
	public void excluir(@PathVariable Long id) {
		service.delete(id);
	}
	
	
	

}






