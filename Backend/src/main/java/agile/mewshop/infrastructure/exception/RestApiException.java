package agile.mewshop.infrastructure.exception;

import agile.mewshop.infrastructure.constants.RestApiStatus;
import lombok.Setter;

@Setter
public class RestApiException extends RuntimeException {

    private RestApiStatus status;

    private String message;

    private Object errors;

    private RestApiException() {
        this.status = RestApiStatus.ERROR;
    }

    public RestApiException(String message) {
        this();
        this.message = message;
    }

    public <T> RestApiException(String message, T errors) {
        this();
        this.message = message;
        this.errors = errors;
    }

    @Override
    public String getMessage() {
        return message;
    }

}
