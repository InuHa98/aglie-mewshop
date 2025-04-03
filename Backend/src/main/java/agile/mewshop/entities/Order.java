package agile.mewshop.entities;


import agile.mewshop.entities.base.PrimaryEntity;
import agile.mewshop.infrastructure.constants.EntityProperties;
import agile.mewshop.infrastructure.constants.OrderStatus;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.DynamicUpdate;

import java.io.Serializable;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "order")
@DynamicUpdate
public class Order extends PrimaryEntity implements Serializable {

    @Column(name = "fullname", length = EntityProperties.LENGTH_NAME)
    private String fullname;

    @Column(name = "phone", length = 13)
    private String phone;

    @Column(name = "address", length = EntityProperties.LENGTH_TEXT)
    private String address;

    @Column(name = "price")
    private Integer price;

    @Column(name = "order_status")
    private OrderStatus orderStatus;

    @ManyToOne
    @JoinColumn(name = "id_user")
    private User user;

    @OneToMany(mappedBy = "order")
    private List<Cart> carts;

}
