package com.mindera.rm.bubbleStoreBack.controller;

import com.mindera.rm.bubbleStoreBack.persistence.entity.Product;
import com.mindera.rm.bubbleStoreBack.service.ProductsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class ProductsController {

    private final ProductsService productsService;

    @GetMapping("/products")
    public ResponseEntity<List<Product>> getAllProducts() {
        return ResponseEntity.ok(productsService.getAllProducts());
    }

    @GetMapping("/products/{id}")
    public ResponseEntity<Product> getAllProductsCount(@PathVariable String id) {
        return ResponseEntity.ok(productsService.getProductByID(id));
    }
}



