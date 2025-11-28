package com.senai.apicadastro.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.senai.apicadastro.entities.Cliente;
import com.senai.apicadastro.repositories.ClienteRepository;

@Service
public class ClienteService {
	
	@Autowired
	private ClienteRepository repository;
	
	public Cliente salvar(Cliente cliente) {
		if (cliente.getIdade() < 18) {
			throw new IllegalArgumentException("O cliente deve ser maior de 18 anos.");
		}
		
		return repository.save(cliente);
	}
	
	public List<Cliente> listarTodos(){
		return repository.findAll();
	}
	
	public Cliente buscarPorId(Long id) {
		Cliente cliente =repository.findById(id).orElse(null);
		
		return cliente;
	}
	
	public void deletar(Long id) {
		Cliente cliente = buscarPorId(id);
		
		repository.delete(cliente);
	}
	
	public Cliente atualizar(Long id, Cliente novosDados) {
		Cliente existente = repository.findById(id).get();
		existente.setNome(novosDados.getNome());
		existente.setIdade(novosDados.getIdade());
		return repository.save(existente);
	}

}









