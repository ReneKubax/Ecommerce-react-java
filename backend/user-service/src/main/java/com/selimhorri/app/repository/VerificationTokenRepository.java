package com.renekubax.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.renekubax.app.domain.VerificationToken;

public interface VerificationTokenRepository extends JpaRepository<VerificationToken, Integer> {
	
	
	
}
