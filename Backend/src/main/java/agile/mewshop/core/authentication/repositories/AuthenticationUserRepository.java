package agile.mewshop.core.authentication.repositories;

import agile.mewshop.entities.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import agile.mewshop.infrastructure.constants.RoleConstant;
import agile.mewshop.repositories.UserRepository;

import java.util.Optional;

@Repository
public interface AuthenticationUserRepository extends UserRepository {

    Optional<User> findByUsernameAndPassword(String username, String password);

    Optional<User> findByUsername(String username);

    Optional<User> findByPhone(String phone);

    Optional<User> findByPhoneAndIdNot(String phone, String idUser);

}
