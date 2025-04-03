package agile.mewshop.entities;


import agile.mewshop.entities.base.PrimaryEntity;
import agile.mewshop.infrastructure.constants.EntityProperties;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.DynamicUpdate;

import java.io.Serializable;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "product")
@DynamicUpdate
public class Product extends PrimaryEntity implements Serializable {

    @Column(name = "name", length = EntityProperties.LENGTH_NAME)
    private String name;

    @Column(name = "image", length = EntityProperties.LENGTH_TEXT)
    private String image;

    @Column(name = "detail", length = EntityProperties.LENGTH_TEXT)
    private String detail;

    @Column(name = "description", length = EntityProperties.LENGTH_TEXT)
    private String description;

    @Column(name = "price")
    private Integer price;

    @Column(name = "quantity")
    private Integer quantity;

    @Column(name = "sell")
    private Integer sell;

    @ManyToOne
    @JoinColumn(name = "id_category")
    private Category category;

}
