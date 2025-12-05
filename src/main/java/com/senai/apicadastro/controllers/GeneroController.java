package com.senai.apicadastro.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.senai.apicadastro.entities.Genero;
import com.senai.apicadastro.services.GeneroService;

@RestController
@RequestMapping("/generos")
@CrossOrigin(origins = "*")
public class GeneroController {
	
	@Autowired
	private GeneroService service;
	
	@GetMapping
	public List<Genero> listar(){
		return service.findAll();
	}
	
	@PostMapping
	public Genero cadastrar(@RequestBody Genero genero) {
		return service.save(genero);
	}
	
	@GetMapping("/{id}")
	public Genero buscar(@PathVariable Long id) {
		return service.findById(id);
	}
	
}


