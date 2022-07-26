package com.mindera.rm.bff.dto.products;

import lombok.Builder;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Builder
@Data
public class ProductDetailsDTO {
    private String id;
    private String name;
    private String description;
    private List<String> images;
    private Double price;
    private Map<String, String> sizeAvailable;
    private Map<String, String> category;
    private boolean newProduct;

}
