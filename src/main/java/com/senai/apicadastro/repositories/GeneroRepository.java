package com.senai.apicadastro.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.senai.apicadastro.entities.Genero;

@Repository
	public interface GeneroRepository extends JpaRepository<Genero, Long> {

	}
	
	


