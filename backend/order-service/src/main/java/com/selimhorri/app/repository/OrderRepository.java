package com.renekubax.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.renekubax.app.domain.Order;

public interface OrderRepository extends JpaRepository<Order, Integer> {
	
	
	
}
