package com.senai.apicadastro.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
@CrossOrigin(origins = "*", allowedHeaders = "*") // Garante acesso do JavaScript
public class MusicaController {

	@Autowired
	private MusicaService service;

	@GetMapping
	public ResponseEntity<List<Musica>> listar() {
		return ResponseEntity.ok(service.listar());
	}

	@GetMapping("/{id}")
	public ResponseEntity<Musica> buscar(@PathVariable Long id) {
		return service.buscarPorId(id).map(resposta -> ResponseEntity.ok(resposta))
				.orElse(ResponseEntity.notFound().build());
	}

	@PostMapping
	public ResponseEntity<Musica> salvar(@RequestBody Musica musica) {
		Musica novaMusica = service.salvar(musica);
		return ResponseEntity.status(HttpStatus.CREATED).body(novaMusica);
	}

	@PutMapping("/{id}")
	public ResponseEntity<Musica> atualizar(@PathVariable Long id, @RequestBody Musica musica) {
		Musica musicaAtualizada = service.atualizar(id, musica);
		if (musicaAtualizada != null) {
			return ResponseEntity.ok(musicaAtualizada);
		}
		return ResponseEntity.notFound().build();
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> excluir(@PathVariable Long id) {
		if (service.delete(id)) {
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
	}
}