package com.mindera.rm.bff.dto.products;

import lombok.Builder;
import lombok.Data;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Builder
@Data
public class ListProductDetailsDTO {
    private String id;
    private String name;
    private List<String> images;
    private Double price;
    private Map<String, String> category;
    private boolean newProduct;

}
