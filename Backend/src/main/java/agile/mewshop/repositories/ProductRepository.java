package agile.mewshop.repositories;

import agile.mewshop.entities.Product;
import agile.mewshop.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, String> {
}
