package com.renekubax.app.service;

import java.util.List;

import com.renekubax.app.dto.VerificationTokenDto;

public interface VerificationTokenService {
	
	List<VerificationTokenDto> findAll();
	VerificationTokenDto findById(final Integer verificationTokenId);
	VerificationTokenDto save(final VerificationTokenDto verificationTokenDto);
	VerificationTokenDto update(final VerificationTokenDto verificationTokenDto);
	VerificationTokenDto update(final Integer verificationTokenId, final VerificationTokenDto verificationTokenDto);
	void deleteById(final Integer verificationTokenId);
	
}










