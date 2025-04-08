package agile.mewshop.core.adminpanel.controller;

import agile.mewshop.core.adminpanel.model.request.AdminPanelCategoriesAddOrUpdateRequest;
import agile.mewshop.core.adminpanel.model.request.AdminPanelCategoriesRequest;
import agile.mewshop.core.adminpanel.services.AdminPanelCategoriesService;
import agile.mewshop.infrastructure.constants.router.RouteAdminConstant;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(RouteAdminConstant.URL_API_CATEGORY_MANAGEMENT)
@RequiredArgsConstructor
public class AdminPanelCategoriesRestController {

    private final AdminPanelCategoriesService adminPanelCategoriesService;

    @GetMapping
    public ResponseEntity<?> list(AdminPanelCategoriesRequest request) {
        return adminPanelCategoriesService.list(request);
    }

    @PostMapping
    public ResponseEntity<?> add(@RequestBody @Valid AdminPanelCategoriesAddOrUpdateRequest request) {
        return adminPanelCategoriesService.add(request);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@RequestBody @Valid AdminPanelCategoriesAddOrUpdateRequest request, @PathVariable String id) {
        request.setId(id);
        return adminPanelCategoriesService.update(request);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable String id) {
        return adminPanelCategoriesService.delete(id);
    }

}
