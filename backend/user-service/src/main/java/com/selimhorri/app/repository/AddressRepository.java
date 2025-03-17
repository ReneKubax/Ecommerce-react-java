package com.renekubax.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.renekubax.app.domain.Address;

public interface AddressRepository extends JpaRepository<Address, Integer> {
	
	
	
}
