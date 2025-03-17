package com.renekubax.app.business.auth.service;

import com.renekubax.app.business.auth.model.request.AuthenticationRequest;
import com.renekubax.app.business.auth.model.response.AuthenticationResponse;

public interface AuthenticationService {
	
	AuthenticationResponse authenticate(final AuthenticationRequest authenticationRequest);
	Boolean authenticate(final String jwt);
	
}
