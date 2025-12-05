package com.senai.apicadastro.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.senai.apicadastro.entities.Musica;

@Repository
public interface MusicaRepository extends JpaRepository<Musica, Long>{

}



