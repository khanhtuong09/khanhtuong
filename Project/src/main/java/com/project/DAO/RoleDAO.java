package com.project.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.Entity.Role;

public interface RoleDAO extends JpaRepository<Role, String> {

}
