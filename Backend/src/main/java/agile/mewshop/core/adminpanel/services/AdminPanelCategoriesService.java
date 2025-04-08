package agile.mewshop.core.adminpanel.services;

import agile.mewshop.core.adminpanel.model.request.AdminPanelCategoriesAddOrUpdateRequest;
import agile.mewshop.core.adminpanel.model.request.AdminPanelCategoriesRequest;
import org.springframework.http.ResponseEntity;

public interface AdminPanelCategoriesService {

    ResponseEntity<?> list(AdminPanelCategoriesRequest request);

    ResponseEntity<?> add(AdminPanelCategoriesAddOrUpdateRequest request);

    ResponseEntity<?> update(AdminPanelCategoriesAddOrUpdateRequest request);

    ResponseEntity<?> delete(String id);

}
