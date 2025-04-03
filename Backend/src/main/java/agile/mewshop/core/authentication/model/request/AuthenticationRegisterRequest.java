package agile.mewshop.core.authentication.model.request;

import agile.mewshop.infrastructure.constants.EntityProperties;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class AuthenticationRegisterRequest {

    @NotBlank(message = "Username không được bỏ trống")
    private String username;

    @NotBlank(message = "Password không được bỏ trống")
    private String password;

    @NotBlank(message = "Confirm Password không được bỏ trống")
    private String confirmPassword;

    @NotBlank(message = "Số điện thoại không được bỏ trống")
    private String phone;

}
