package com.mindera.rm.bff.adapter.mockserver.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashMap;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Product {

    private String skuid;
    private String name;
    private Double price;
    private String description;
    private HashMap<String, String> sizeAvailable;
    private String[] img;
    private HashMap<String, String> category;

    private boolean newProduct;

    private List<Promotion> promotions;
}
