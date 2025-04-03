package agile.mewshop.core.authentication.services;

import agile.mewshop.core.authentication.model.request.AuthenticationInfomationRequest;
import agile.mewshop.core.authentication.model.request.AuthenticationLoginRequest;
import org.springframework.http.ResponseEntity;
import agile.mewshop.core.authentication.model.request.AuthenticationRegisterRequest;

public interface AuthenticationService {

    ResponseEntity<?> register(AuthenticationRegisterRequest request);

    ResponseEntity<?> login(AuthenticationLoginRequest request);

    ResponseEntity<?> infomation(AuthenticationInfomationRequest request);

}
