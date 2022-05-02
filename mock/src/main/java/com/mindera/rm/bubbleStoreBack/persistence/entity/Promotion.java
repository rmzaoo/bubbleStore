package com.mindera.rm.bubbleStoreBack.persistence.entity;

import com.mindera.rm.bubbleStoreBack.enumerators.PromotionType;
import lombok.*;

import java.math.BigDecimal;

@Data
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Promotion {
    private String id;
    private PromotionType type;
    private Integer requiredQty;
    private BigDecimal price;
    private Integer freeQty;
    private Integer amount;
}
