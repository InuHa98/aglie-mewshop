package agile.mewshop.infrastructure.security.router;

import agile.mewshop.helpers.RouterHelper;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.stereotype.Component;
import agile.mewshop.infrastructure.constants.RoleConstant;
import agile.mewshop.infrastructure.constants.RoutesConstant;

@Component
public class AdminSecurityConfig {

    public void configure(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests(auth -> {
            auth.requestMatchers(RouterHelper.appendWildcard(RoutesConstant.PREFIX_API_ADMIN)).hasAuthority(RoleConstant.ADMIN.name());
        });
    }

}
