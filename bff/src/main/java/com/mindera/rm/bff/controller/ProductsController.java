package com.mindera.rm.bff.controller;

import com.mindera.rm.bff.dto.products.ProductDetailsDTO;
import com.mindera.rm.bff.dto.products.ListProductDetailsDTO;
import com.mindera.rm.bff.service.ProductsService;
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
    public ResponseEntity<List<ListProductDetailsDTO>> getAllProducts() {
        return ResponseEntity.ok(productsService.getAllProducts());
    }

    @GetMapping("/products/{id}")
    public ResponseEntity<ProductDetailsDTO> getProductById(@PathVariable String id) {
        return ResponseEntity.ok(productsService.getProductById(id));
    }

}
