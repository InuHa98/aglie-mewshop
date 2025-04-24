package agile.mewshop.core.adminpanel.model.request;

import agile.mewshop.entities.Category;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class AddProductRequest {
    private String name;
    private String image;
    private String detail;
    private String description;
    private Integer price;
    private Integer quantity;
    private Category category;
}
