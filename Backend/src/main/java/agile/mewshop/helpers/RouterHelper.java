package agile.mewshop.helpers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import agile.mewshop.infrastructure.common.ApiResponse;
import agile.mewshop.infrastructure.constants.RoleConstant;
import agile.mewshop.infrastructure.constants.RoutesConstant;

public class RouterHelper {

    public static String appendWildcard(String url) {
        return url + "/**";
    }

    public static String appendApiWildcard(String url) {
        return appendWildcard(RoutesConstant.API_PREFIX);
    }

    public static String appendPrefixApi(String url) {
        return RoutesConstant.API_PREFIX + url;
    }

    public static String appendPrefixApi(String url, String wildCard) {
        return RoutesConstant.API_PREFIX + url + wildCard;
    }

    public static ResponseEntity<ApiResponse> createResponseApi(ApiResponse response, HttpStatus status) {
        return new ResponseEntity<>(response, status);
    }

    public static ResponseEntity<ApiResponse> responseSuccess(String message) {
        return responseSuccess(message, null);
    }

    public static ResponseEntity<ApiResponse> responseSuccess(String message, Object data) {
        return createResponseApi(ApiResponse.success(message, data), HttpStatus.OK);
    }

    public static ResponseEntity<ApiResponse> responseError(String message) {
        return responseError(message, null);
    }

    public static ResponseEntity<ApiResponse> responseError(String message, Object data) {
        return createResponseApi(ApiResponse.error(message, data), HttpStatus.BAD_REQUEST);
    }

    public static RoleConstant getRequiredRoleForUrl(String url) {
        if (url.startsWith(RoutesConstant.PREFIX_API_ADMIN)) {
            return RoleConstant.ADMIN;
        } else if (url.startsWith(RoutesConstant.PREFIX_API_CUSTOMER)) {
            return RoleConstant.CUSTOMER;
        }
        return null;
    }

}
