package agile.mewshop.infrastructure.config.dbgenerator;

import agile.mewshop.entities.User;
import agile.mewshop.infrastructure.config.dbgenerator.repositories.DBGeneratorUserRepository;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import java.util.Objects;

@Component
@RequiredArgsConstructor
public class DBGenerator {

    private final DBGeneratorUserRepository dbGeneratorUserRepository;


    @Value("${db.fake.isGenerated}")
    private String isGenerated;

    @Value("${db.fake-user-name}")
    private String userName;

    @Value("${db.fake-user-password}")
    private String userPassword;


    @PostConstruct
    public void init() {
        if (isGenerated.equals("true")) {
            generateUserAdmin();
        }
    }

    private void generateUserAdmin() {

        if (!StringUtils.hasText(userName) || !StringUtils.hasText(userPassword)) {
            return;
        }

        User user = dbGeneratorUserRepository.findByUsername(userName).orElse(null);

        if (Objects.isNull(user)) {
            User dataUser = new User();
            dataUser.setUsername(userName);
            dataUser.setPassword(userPassword);

            dbGeneratorUserRepository.save(dataUser);
        }

    }

}
