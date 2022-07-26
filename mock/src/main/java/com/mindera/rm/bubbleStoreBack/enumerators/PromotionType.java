package com.mindera.rm.bubbleStoreBack.enumerators;

import com.mindera.rm.bubbleStoreBack.persistence.entity.Promotion;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@AllArgsConstructor
public enum PromotionType {
    GET_50PERCENT_DISCONT(Arrays.asList("003", "011"), 1, new BigDecimal("0.5"), 0, 1),
    GET_30PERCENT_DISCONT(Arrays.asList("004", "002"), 1, new BigDecimal("0.5"), 0, 0);

    private List<String> products;
    private Integer requiredQty;
    private BigDecimal price;
    private Integer freeQty;
    private Integer amount;

    public static List<Promotion> getPromotionType(String productId) {
        return Arrays.stream(PromotionType.values())
                .filter(promotionType -> promotionType.getProducts().contains(productId))
                .map(mock -> Promotion.builder()
                        .requiredQty(mock.getRequiredQty())
                        .price(mock.getPrice())
                        .freeQty(mock.getFreeQty())
                        .amount(mock.getAmount())
                        .type(mock)
                        .build())

                .collect(Collectors.toList());
    }
}
