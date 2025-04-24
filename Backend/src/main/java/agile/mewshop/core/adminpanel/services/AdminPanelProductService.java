package agile.mewshop.core.adminpanel.services;

import agile.mewshop.core.adminpanel.model.request.AddProductRequest;

import agile.mewshop.core.adminpanel.model.request.UpdateProductRequest;
import agile.mewshop.entities.Category;
import agile.mewshop.entities.Product;

import java.util.List;

public interface AdminPanelProductService {
    List<Product> getList();
    List<Category> getListCate();


    Product addProduct(AddProductRequest request);


    Product updateProduct(UpdateProductRequest request);

    String delete(String id);

}
