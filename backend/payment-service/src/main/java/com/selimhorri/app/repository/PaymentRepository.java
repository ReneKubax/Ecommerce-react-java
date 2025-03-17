package com.renekubax.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.renekubax.app.domain.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Integer> {
	
	
	
}
