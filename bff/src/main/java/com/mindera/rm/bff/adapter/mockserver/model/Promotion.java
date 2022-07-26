package com.mindera.rm.bff.adapter.mockserver.model;

import com.mindera.rm.bff.enumerators.PromotionType;

import java.math.BigDecimal;

public class Promotion {
    private String id;
    private PromotionType type;
    private Integer requiredQty;
    private BigDecimal price;
    private Integer freeQty;
    private Integer amount;
}
