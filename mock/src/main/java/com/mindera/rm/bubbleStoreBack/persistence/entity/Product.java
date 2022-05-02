package com.mindera.rm.bubbleStoreBack.persistence.entity;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import java.util.HashMap;
import java.util.List;

@Data
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Product {
    private String skuid;
    private String name;
    private Double price;
    private String description;
    private HashMap<String, String> sizeAvailable;
    private String[] img;
    private HashMap<String, String> category;

    @JsonProperty("new")
    private boolean newProduct;

    private List<Promotion> promotions;
}
