package com.project.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.Entity.Category;

public interface CaterorityDAO extends JpaRepository<Category, String> {

}