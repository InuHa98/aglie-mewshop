package agile.mewshop.infrastructure.security;

import agile.mewshop.core.authentication.repositories.AuthenticationUserRepository;
import agile.mewshop.entities.User;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class AuthenticationUserService implements UserDetailsService {

    private final AuthenticationUserRepository authenticationUserRepository;

    @Override
    public UserDetails loadUserByUsername(String userID) throws UsernameNotFoundException {
        User user = authenticationUserRepository.findById(userID).orElse(null);
        if (user == null) {
            throw new UsernameNotFoundException(userID);
        }
        return new CustomUserDetails(user);
    }

}
