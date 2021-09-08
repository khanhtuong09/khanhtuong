package com.project.Service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.DAO.RoleDAO;
import com.project.Entity.Role;
import com.project.Service.RoleService;

@Service
public class RoleServiceimpl implements RoleService{
	@Autowired
	RoleDAO dao;

	@Override
	public List<Role> findAll() {
		return dao.findAll();
	}
	
}
