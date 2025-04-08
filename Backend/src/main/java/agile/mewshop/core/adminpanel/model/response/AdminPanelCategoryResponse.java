package agile.mewshop.core.adminpanel.model.response;

import agile.mewshop.infrastructure.common.HasOrderNumber;
import agile.mewshop.infrastructure.common.IsIdentify;

public interface AdminPanelCategoryResponse extends IsIdentify, HasOrderNumber {

    String getName();

    String getStatus();

}
