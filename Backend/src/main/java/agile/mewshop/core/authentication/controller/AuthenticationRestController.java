package agile.mewshop.core.authentication.controller;

import agile.mewshop.core.authentication.model.request.AuthenticationInfomationRequest;
import agile.mewshop.core.authentication.model.request.AuthenticationLoginRequest;
import agile.mewshop.core.authentication.services.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import agile.mewshop.core.authentication.model.request.AuthenticationRegisterRequest;
import agile.mewshop.infrastructure.constants.router.RouteAuthenticationConstant;
import agile.mewshop.helpers.RouterHelper;
import agile.mewshop.infrastructure.common.ApiResponse;
import agile.mewshop.infrastructure.constants.RoutesConstant;

import java.util.Map;

@RestController
@RequestMapping(RoutesConstant.API_PREFIX)
@RequiredArgsConstructor
public class AuthenticationRestController {

    private final AuthenticationService authenticationService;

    @PostMapping(RouteAuthenticationConstant.API_REGISTER)
    public ResponseEntity<?> register(@RequestBody AuthenticationRegisterRequest requestBody) {
        return authenticationService.register(requestBody);
    }

    @PostMapping(RouteAuthenticationConstant.API_LOGIN)
    public ResponseEntity<?> login(@RequestBody AuthenticationLoginRequest requestBody) {
        return authenticationService.login(requestBody);
    }

    @PutMapping(RouteAuthenticationConstant.API_INFOMATION)
    public ResponseEntity<?> infomation(@RequestBody AuthenticationInfomationRequest requestBody) {
        return authenticationService.infomation(requestBody);
    }

}
