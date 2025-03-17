package com.renekubax.app.service;

import java.util.List;

import com.renekubax.app.dto.ProductDto;

public interface ProductService {
	
	List<ProductDto> findAll();
	ProductDto findById(final Integer productId);
	ProductDto save(final ProductDto productDto);
	ProductDto update(final ProductDto productDto);
	ProductDto update(final Integer productId, final ProductDto productDto);
	void deleteById(final Integer productId);
	
}
