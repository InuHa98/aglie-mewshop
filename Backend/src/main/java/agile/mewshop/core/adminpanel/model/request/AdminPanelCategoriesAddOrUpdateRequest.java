package agile.mewshop.core.adminpanel.model.request;

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
public class AdminPanelCategoriesAddOrUpdateRequest {

    private String id;

    @NotBlank(message = "Category name can not blank")
    @Size(max = EntityProperties.LENGTH_NAME, message = "Category name cannot exceed " + EntityProperties.LENGTH_NAME + " characters")
    private String name;

}
