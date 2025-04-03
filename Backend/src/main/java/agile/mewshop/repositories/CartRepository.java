package agile.mewshop.repositories;

import agile.mewshop.entities.Cart;
import agile.mewshop.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartRepository extends JpaRepository<Cart, String> {
}
