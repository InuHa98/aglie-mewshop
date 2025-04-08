package agile.mewshop.core.authentication.services.impl;

import agile.mewshop.core.authentication.model.request.AuthenticationInfomationRequest;
import agile.mewshop.core.authentication.model.request.AuthenticationLoginRequest;
import agile.mewshop.core.authentication.repositories.AuthenticationUserRepository;
import agile.mewshop.core.authentication.services.AuthenticationService;
import agile.mewshop.helpers.ValidateHelper;
import agile.mewshop.utils.JwtUtil;
import agile.mewshop.entities.User;
import agile.mewshop.helpers.RouterHelper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import agile.mewshop.core.authentication.model.request.AuthenticationRegisterRequest;
import agile.mewshop.infrastructure.constants.RoleConstant;
import org.springframework.util.StringUtils;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {

    private final JwtUtil jwtUtil;

    private final AuthenticationUserRepository authenticationUserRepository;

    @Override
    public ResponseEntity<?> register(AuthenticationRegisterRequest request) {

        if (authenticationUserRepository.findByUsername(request.getUsername()).isPresent()) {
            return RouterHelper.responseError("Username đã tồn tại trên hệ thống");
        }

        if (!request.getPassword().equals(request.getConfirmPassword())) {
            return RouterHelper.responseError("Mật khẩu nhập lại không khớp");
        }

        if (authenticationUserRepository.findByPhone(request.getPhone()).isPresent()) {
            return RouterHelper.responseError("Số điện thoại đã tồn tại trên hệ thống");
        }

        if (!ValidateHelper.isValidPhoneNumber(request.getPhone())) {
            return RouterHelper.responseError("Số điện thoại không hợp lệ");
        }

        User user = new User();
        user.setUsername(request.getUsername());
        user.setPassword(request.getPassword());
        user.setPhone(request.getPhone());
        user.setRole(RoleConstant.CUSTOMER);
        authenticationUserRepository.save(user);

        return RouterHelper.responseSuccess("Đăng ký thành công", user);
    }

    @Override
    public ResponseEntity<?> login(AuthenticationLoginRequest request) {
        User user = authenticationUserRepository.findByUsernameAndPassword(request.getUsername(), request.getPassword()).orElse(null);
        if (user == null) {
            return RouterHelper.responseError("Tài khoản hoặc mật khẩu không chính xác");
        }

        String token = jwtUtil.generateToken(user.getId(), user);

        return RouterHelper.responseSuccess("Đăng nhập thành công", token);
    }

    @Override
    public ResponseEntity<?> infomation(AuthenticationInfomationRequest request) {
        User user = authenticationUserRepository.findById(request.getId()).orElse(null);

        if (user == null) {
            return RouterHelper.responseError("Không tìm thấy user");
        }

        if (!ValidateHelper.isValidPhoneNumber(request.getPhone())) {
            return RouterHelper.responseError("Số điện thoại không hợp lệ");
        }

        if(authenticationUserRepository.findByPhoneAndIdNot(request.getPhone(), user.getId()).isPresent()) {
            return RouterHelper.responseError("Số điện thoại đã tồn tại trên hệ thống");
        }

        if (StringUtils.hasText(request.getNewPassword())) {
            if (authenticationUserRepository.findByUsernameAndPassword(user.getUsername(), request.getCurrentPassword()).isEmpty()) {
                return RouterHelper.responseError("Mật khẩu cũ không chính xác");
            }

            if (!request.getNewPassword().equals(request.getConfirmNewPassword())) {
                return RouterHelper.responseError("Mật khẩu nhập lại không khớp");
            }

            user.setPassword(request.getNewPassword());
        }

        user.setFullname(request.getFullname());
        user.setPhone(request.getPhone());

        authenticationUserRepository.save(user);

        return RouterHelper.responseSuccess("Cập nhật thông tin thành công", user);    }

}
