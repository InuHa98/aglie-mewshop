package agile.mewshop.core.adminpanel.Mapper;

import agile.mewshop.core.adminpanel.model.request.AddProductRequest;

import agile.mewshop.core.adminpanel.model.request.UpdateProductRequest;
import agile.mewshop.entities.Product;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface ProductMapper {

    Product toProduct (AddProductRequest request);
    void toUpdateProduct(UpdateProductRequest request, @MappingTarget Product product);
}
