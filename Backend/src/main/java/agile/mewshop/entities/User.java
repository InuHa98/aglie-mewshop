package agile.mewshop.entities;


import agile.mewshop.entities.base.PrimaryEntity;
import agile.mewshop.infrastructure.constants.RoleConstant;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.Nationalized;
import agile.mewshop.infrastructure.constants.EntityProperties;

import java.io.Serializable;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "user")
@DynamicUpdate
public class User extends PrimaryEntity implements Serializable {

    @Column(name = "fullname", length = EntityProperties.LENGTH_NAME)
    private String fullname;

    @Column(name = "username", length = EntityProperties.LENGTH_NAME)
    @Nationalized
    private String username;

    @Column(name = "password", length = EntityProperties.LENGTH_NAME)
    private String password;

    @Column(name = "phone", length = EntityProperties.LENGTH_NAME)
    private String phone;

    @Column(name = "role")
    private RoleConstant role;

}
