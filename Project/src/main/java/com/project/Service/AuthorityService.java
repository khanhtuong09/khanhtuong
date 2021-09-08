package com.project.Service;

import java.util.List;

import com.project.Entity.Authority;



public interface AuthorityService {

	public List<Authority> findAuthoritiesOfAdministrators();

	public List<Authority> findAll();

	public Authority create(Authority auth);

	public void delete(Integer id);
		

}
