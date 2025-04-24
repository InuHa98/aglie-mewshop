package agile.mewshop.core.adminpanel.services.impl;

import agile.mewshop.core.adminpanel.Mapper.ProductMapper;
import agile.mewshop.core.adminpanel.model.request.AddProductRequest;
import agile.mewshop.core.adminpanel.model.request.UpdateProductRequest;
import agile.mewshop.core.adminpanel.repositories.AdminPanelCategoriesRepository;
import agile.mewshop.core.adminpanel.repositories.AdminpanelProductRepository;
import agile.mewshop.core.adminpanel.services.AdminPanelProductService;
import agile.mewshop.entities.Category;
import agile.mewshop.entities.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminPanelProductServiceImp implements AdminPanelProductService {
    @Autowired
    private AdminpanelProductRepository adminpanelProductRepository;
    @Autowired
    ProductMapper productMapper;
    @Autowired
    AdminPanelCategoriesRepository adminPanelCategoriesRepository;

    @Override
    public List<Product> getList() {

         List<Product>  list= adminpanelProductRepository.findAll();
         return list;
    }

    @Override
    public List<Category> getListCate() {
        return adminPanelCategoriesRepository.findAll();
    }

    @Override
    public Product addProduct(AddProductRequest request) {
        Product product = productMapper.toProduct(request);
        return adminpanelProductRepository.save(product);
    }

    @Override
    public Product updateProduct(UpdateProductRequest request) {
        Product product =adminpanelProductRepository.findById(request.getId()).orElseThrow();
        productMapper.toUpdateProduct(request,product);
        return adminpanelProductRepository.save(product);
    }

    @Override
    public String delete(String id) {
        try {
             adminpanelProductRepository.deleteById(id);
             return "đã xóa product có id= "+id;
        }catch (Exception e){
            e.printStackTrace();
            return "xóa thất bại";
        }

    }
}
