package agile.mewshop.core.adminpanel.repositories;

import agile.mewshop.core.adminpanel.model.request.AdminPanelCategoriesRequest;
import agile.mewshop.core.adminpanel.model.response.AdminPanelCategoryResponse;
import agile.mewshop.repositories.CategoryRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminPanelCategoriesRepository extends CategoryRepository {

    @Query(value = """
        SELECT 
            ROW_NUMBER() OVER (ORDER BY id DESC) as orderNumber,
            id,
            name,
            status
        FROM category
        ORDER BY id DESC
    """, countQuery = """
        SELECT 
            COUNT(*)
        FROM category
    """, nativeQuery = true)
    Page<AdminPanelCategoryResponse> list(Pageable pageable);

    @Query(value = """
        SELECT 
            CASE WHEN COUNT(*) > 0 THEN 'TRUE' ELSE 'FALSE' END 
        FROM category
        WHERE 
            status = 1 AND
            name = :name AND
            (:id IS NULL OR id != :id)
    """, nativeQuery = true)
    boolean isExistsName(String name, String id);

}
