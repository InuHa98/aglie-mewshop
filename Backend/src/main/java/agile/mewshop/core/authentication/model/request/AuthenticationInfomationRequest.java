package agile.mewshop.core.authentication.model.request;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class AuthenticationInfomationRequest {

    private String id;

    private String fullname;

    @NotBlank(message = "Số điện thoại không được bỏ trống")
    private String phone;

    private String currentPassword;

    private String newPassword;

    private String confirmNewPassword;

}
