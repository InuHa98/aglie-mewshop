package agile.mewshop.core.adminpanel.controller;

import agile.mewshop.core.adminpanel.model.request.AddProductRequest;
import agile.mewshop.core.adminpanel.model.request.UpdateProductRequest;
import agile.mewshop.core.adminpanel.services.AdminPanelProductService;
import agile.mewshop.entities.Category;
import agile.mewshop.entities.Product;
import agile.mewshop.infrastructure.common.ApiResponse;
import agile.mewshop.infrastructure.constants.router.RouteAdminConstant;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping(RouteAdminConstant.URL_API_PRODUCT_MANAGEMENT)
@RequiredArgsConstructor
public class AdminPanelProductController {
    @Autowired
    AdminPanelProductService adminPanelProductService;

    @GetMapping
    public ResponseEntity<ApiResponse> getList(){
        List<Product> products= adminPanelProductService.getList();
        return ResponseEntity.ok(new  ApiResponse(products));

    }
    @GetMapping("/categories")
    public ResponseEntity<ApiResponse> getListCate(){
        List<Category> products= adminPanelProductService.getListCate();
        return ResponseEntity.ok(new  ApiResponse(products));

    }

    @PostMapping()
    public ResponseEntity<ApiResponse> addProduct(@RequestBody AddProductRequest request){
        return ResponseEntity.ok(new  ApiResponse(adminPanelProductService.addProduct(request)));
    }

    @PutMapping()
    public ResponseEntity<ApiResponse> updatePr(@RequestBody UpdateProductRequest request){
        return ResponseEntity.ok(new  ApiResponse(adminPanelProductService.updateProduct(request)));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse> delete(@PathVariable String id){
        return ResponseEntity.ok(new  ApiResponse(adminPanelProductService.delete(id)));
    }

}
