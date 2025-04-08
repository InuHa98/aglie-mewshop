package agile.mewshop.core.adminpanel.services.impl;

import agile.mewshop.core.adminpanel.model.request.AdminPanelCategoriesAddOrUpdateRequest;
import agile.mewshop.core.adminpanel.model.request.AdminPanelCategoriesRequest;
import agile.mewshop.core.adminpanel.model.response.AdminPanelCategoryResponse;
import agile.mewshop.core.adminpanel.repositories.AdminPanelCategoriesRepository;
import agile.mewshop.core.adminpanel.services.AdminPanelCategoriesService;
import agile.mewshop.entities.Category;
import agile.mewshop.helpers.PaginationHelper;
import agile.mewshop.helpers.RouterHelper;
import agile.mewshop.infrastructure.common.PageableObject;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AdminPanelCategoriesServiceImpl implements AdminPanelCategoriesService  {

    private final AdminPanelCategoriesRepository adminPanelCategoriesRepository;

    @Override
    public ResponseEntity<?> list(AdminPanelCategoriesRequest request) {
        Pageable pageable = PaginationHelper.createPageable(request);
        PageableObject<AdminPanelCategoryResponse> data = PageableObject.of(adminPanelCategoriesRepository.list(pageable));
        return RouterHelper.responseSuccess("Lấy danh sách dữ liệu thành công", data);
    }

    @Override
    public ResponseEntity<?> add(AdminPanelCategoriesAddOrUpdateRequest request) {
        if (adminPanelCategoriesRepository.isExistsName(request.getName(), null)) {
            return RouterHelper.responseError("The item name already exists: " + request.getName());
        }

        Category category = new Category();
        category.setName(request.getName());

        return RouterHelper.responseSuccess("Added successfully", adminPanelCategoriesRepository.save(category));
    }

    @Override
    public ResponseEntity<?> update(AdminPanelCategoriesAddOrUpdateRequest request) {
        Category category = adminPanelCategoriesRepository.findById(request.getId()).orElse(null);
        if (category == null) {
            return RouterHelper.responseError("Item not found");
        }

        if (adminPanelCategoriesRepository.isExistsName(request.getName(), category.getId())) {
            return RouterHelper.responseError("The item name already exists: " + request.getName());
        }

        category.setName(request.getName());
        return RouterHelper.responseSuccess("Updated successfully", adminPanelCategoriesRepository.save(category));
    }

    @Override
    public ResponseEntity<?> delete(String id) {
        Category category = adminPanelCategoriesRepository.findById(id).orElse(null);
        if (category == null) {
            return RouterHelper.responseError("Item not found");
        }

        adminPanelCategoriesRepository.delete(category);
        return RouterHelper.responseSuccess("Deleted successfully");
    }

}
