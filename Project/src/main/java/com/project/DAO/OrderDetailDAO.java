package com.project.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.Entity.OrderDetail;

public interface OrderDetailDAO extends JpaRepository<OrderDetail, Long> {

}