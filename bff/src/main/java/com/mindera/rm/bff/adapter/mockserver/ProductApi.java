package com.mindera.rm.bff.adapter.mockserver;

import com.mindera.rm.bff.adapter.mockserver.model.Product;

import java.util.List;


public interface ProductApi {

    List<Product> getAllProducts();

    Product getProductById(String id);

}
