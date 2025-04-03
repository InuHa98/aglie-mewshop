package agile.mewshop.utils;

import agile.mewshop.entities.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

@Component
public class JwtUtil {

    @Value("${authentication.secret-key}")
    private String SECRET_KEY;

    private static final long EXPIRATION_TIME = 86400000;

    public static String getAuthorization(HttpServletRequest request) {
        String token = request.getHeader("Authorization");
        if (token != null && token.startsWith("Bearer ")) {
            return token.substring(7);
        }
        return null;
    }

    public SecretKey getSecretKey() {
        byte[] keyBytes = SECRET_KEY.getBytes();
        return Keys.hmacShaKeyFor(keyBytes);
    }

    public boolean validateToken(String token) {
        try {
            Jws<Claims> claims = Jwts.parserBuilder()
                    .setSigningKey(getSecretKey())
                    .build()
                    .parseClaimsJws(token);

            Date expirationDate = claims.getBody().getExpiration();
            return !expirationDate.before(new Date());
        } catch (Exception e) {
            return false;
        }
    }

    public String generateToken(String username, User oauthUser) {
        Map<String, Object> dataUser = new HashMap<>();
        dataUser.put("id", oauthUser.getId());
        dataUser.put("role", oauthUser.getRole());
        dataUser.put("username", oauthUser.getUsername());
        dataUser.put("fullname", oauthUser.getFullname());
        dataUser.put("phone", oauthUser.getPhone());
        return buildToken(username, dataUser);
    }

    private String buildToken(String idUser, Map<String, Object> data) {
        return Jwts.builder()
                .setSubject(idUser)
                .addClaims(data)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(getSecretKey())
                .compact();
    }

    public String getUsernameFromToken(String token) {
        Claims claims = Jwts.parser()
                .setSigningKey(getSecretKey())
                .parseClaimsJws(token)
                .getBody();
        return claims.getSubject();
    }

    public Claims getClaimsFromToken(String token) {
        Jws<Claims> claimsJws = Jwts.parserBuilder()
                .setSigningKey(getSecretKey())
                .build()
                .parseClaimsJws(token);

        return claimsJws.getBody();
    }

    public Set<String> getRoleFromToken(String token) {
        return new HashSet<>(getClaimsFromToken(token).get("role", List.class));
    }

}
