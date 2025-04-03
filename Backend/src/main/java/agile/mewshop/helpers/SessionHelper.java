package agile.mewshop.helpers;

import agile.mewshop.entities.User;
import agile.mewshop.infrastructure.constants.RoleConstant;
import agile.mewshop.infrastructure.constants.SessionConstant;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Collections;
import java.util.Set;

@Component
@RequiredArgsConstructor
public class SessionHelper {

    private final HttpSession httpSession;

    private static User authUser;

    public User getCurrentUser() {
        return (User) httpSession.getAttribute(SessionConstant.AUTH_USER);
    }

    public void setCurrentUser(User user) {
        httpSession.setAttribute(SessionConstant.AUTH_USER, user);
        authUser = user;
    }

    public String getUserId() {
        return authUser.getId();
    }

    public String getUsername() {
        return authUser.getUsername();
    }

    public Set<RoleConstant> getUserRole() {
        return Collections.singleton(authUser.getRole());
    }

    public String getUserPhone() {
        return authUser.getPhone();
    }

}
