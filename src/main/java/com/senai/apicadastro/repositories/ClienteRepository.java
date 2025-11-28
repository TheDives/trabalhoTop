package com.senai.apicadastro.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.senai.apicadastro.entities.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente,Long> {

}
