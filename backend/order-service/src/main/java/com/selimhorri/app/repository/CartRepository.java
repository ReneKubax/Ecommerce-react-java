package com.renekubax.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.renekubax.app.domain.Cart;

public interface CartRepository extends JpaRepository<Cart, Integer> {
	
	
	
}
