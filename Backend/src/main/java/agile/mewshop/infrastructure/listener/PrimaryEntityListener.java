package agile.mewshop.infrastructure.listener;

import agile.mewshop.entities.base.PrimaryEntity;
import jakarta.persistence.PrePersist;
import agile.mewshop.infrastructure.constants.EntityStatus;

import java.util.UUID;

public class PrimaryEntityListener {

    @PrePersist
    private void onCreate(PrimaryEntity entity) {
        if (entity.getId() == null) {
            entity.setId(UUID.randomUUID().toString());
        }
        if (entity.getStatus() == null) {
            entity.setStatus(EntityStatus.ACTIVE);
        }
    }

}
