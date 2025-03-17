package com.renekubax.app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.renekubax.app.domain.User;

public interface UserRepository extends JpaRepository<User, Integer> {
	
	Optional<User> findByCredentialUsername(final String username);
	
}
