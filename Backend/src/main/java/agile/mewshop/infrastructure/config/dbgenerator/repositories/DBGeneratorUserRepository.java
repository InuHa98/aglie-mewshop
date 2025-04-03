package agile.mewshop.infrastructure.config.dbgenerator.repositories;

import agile.mewshop.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DBGeneratorUserRepository extends JpaRepository<User, String> {

    Optional<User> findByUsername(String username);

}
