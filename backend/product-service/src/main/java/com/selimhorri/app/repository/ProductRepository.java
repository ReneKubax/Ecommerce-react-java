package com.renekubax.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.renekubax.app.domain.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {
	
	
	
}
