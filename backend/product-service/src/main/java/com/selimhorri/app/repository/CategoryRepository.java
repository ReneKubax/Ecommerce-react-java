package com.renekubax.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.renekubax.app.domain.Category;

public interface CategoryRepository extends JpaRepository<Category, Integer> {
	
	
	
}
