package com.mindera.rm.bubbleStoreBack.service;

import com.mindera.rm.bubbleStoreBack.persistence.entity.Product;
import com.mindera.rm.bubbleStoreBack.persistence.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductsService {
    private final ProductRepository productRepository;

    public List<Product> getAllProducts() {
        return productRepository.getAllProducts();
    }

    public Product getProductByID(String id) {
        return productRepository.getProductByID(id);
    }
}
