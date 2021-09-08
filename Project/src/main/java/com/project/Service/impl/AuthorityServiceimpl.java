package com.project.Service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.DAO.AccountDAO;
import com.project.DAO.AuthorityDAO;
import com.project.Entity.Account;
import com.project.Entity.Authority;
import com.project.Service.AuthorityService;

@Service
public class AuthorityServiceimpl implements AuthorityService{
	@Autowired
	AuthorityDAO audao;
	
	@Autowired
	AccountDAO acdao;

	@Override
	public List<Authority> findAuthoritiesOfAdministrators() {
		List<Account> accounts = acdao.getAdministrators();
		return audao.authoritiesOf(accounts);
	}

	@Override
	public List<Authority> findAll() {
		return audao.findAll();
	}

	@Override
	public Authority create(Authority auth) {
		return audao.save(auth);
	}

	@Override
	public void delete(Integer id) {
		audao.deleteById(id);
		
	}
}
