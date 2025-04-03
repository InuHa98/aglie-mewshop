package agile.mewshop.infrastructure.security.router;

import agile.mewshop.helpers.RouterHelper;
import agile.mewshop.infrastructure.constants.RoleConstant;
import agile.mewshop.infrastructure.constants.RoutesConstant;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.stereotype.Component;

@Component
public class CustomerSecurityConfig {

    public void configure(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests(auth -> {
            auth.requestMatchers(RouterHelper.appendWildcard(RoutesConstant.PREFIX_API_CUSTOMER)).hasAnyAuthority(RoleConstant.ADMIN.name(), RoleConstant.CUSTOMER.name());
        });
    }

}
