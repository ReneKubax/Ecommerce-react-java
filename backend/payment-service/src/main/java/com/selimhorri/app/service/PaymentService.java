package com.renekubax.app.service;

import java.util.List;

import com.renekubax.app.dto.PaymentDto;

public interface PaymentService {
	
	List<PaymentDto> findAll();
	PaymentDto findById(final Integer paymentId);
	PaymentDto save(final PaymentDto paymentDto);
	PaymentDto update(final PaymentDto paymentDto);
	void deleteById(final Integer paymentId);
	
}
