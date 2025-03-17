package com.renekubax.app.service;

import java.util.List;

import com.renekubax.app.domain.id.FavouriteId;
import com.renekubax.app.dto.FavouriteDto;

public interface FavouriteService {
	
	List<FavouriteDto> findAll();
	FavouriteDto findById(final FavouriteId favouriteId);
	FavouriteDto save(final FavouriteDto favouriteDto);
	FavouriteDto update(final FavouriteDto favouriteDto);
	void deleteById(final FavouriteId favouriteId);
	
}
