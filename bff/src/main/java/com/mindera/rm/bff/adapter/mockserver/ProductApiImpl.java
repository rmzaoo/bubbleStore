package com.mindera.rm.bff.adapter.mockserver;

import com.mindera.rm.bff.adapter.mockserver.model.Product;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class ProductApiImpl implements ProductApi {
    @Override
    public List<Product> getAllProducts() {
        RestTemplate restTemplate = new RestTemplate();
        return List.of(Objects.requireNonNull(restTemplate.getForObject("http://127.0.0.1:4512/products", Product[].class)));
    }

    @Override
    public Product getProductById(String id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject("http://127.0.0.1:4512/products/" + id, Product.class);
    }
}
