package agile.mewshop.infrastructure.security.router;

import agile.mewshop.helpers.RouterHelper;
import agile.mewshop.infrastructure.constants.router.RouteAuthenticationConstant;
import lombok.RequiredArgsConstructor;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.stereotype.Component;
import agile.mewshop.infrastructure.security.JwtAuthenticationFilter;


@Component
@RequiredArgsConstructor
public class AuthenticationSecurityConfig {

    private final JwtAuthenticationFilter jwtAuthenticationFilter;

    public void configure(HttpSecurity http) throws Exception {
        http.rememberMe(AbstractHttpConfigurer::disable);

        http.authorizeHttpRequests(authorization -> {
            authorization.requestMatchers(RouterHelper.appendPrefixApi(RouteAuthenticationConstant.API_LOGIN)).permitAll();
            authorization.requestMatchers(RouterHelper.appendPrefixApi(RouteAuthenticationConstant.API_INFOMATION)).authenticated();
            authorization.requestMatchers(RouterHelper.appendPrefixApi(RouteAuthenticationConstant.API_REGISTER)).permitAll();
        });

        http.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
    }

}
