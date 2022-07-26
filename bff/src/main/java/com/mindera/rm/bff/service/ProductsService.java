package com.mindera.rm.bff.service;

import com.mindera.rm.bff.adapter.mockserver.ProductApi;
import com.mindera.rm.bff.converter.ProductsConverter;
import com.mindera.rm.bff.dto.products.ListProductDetailsDTO;
import com.mindera.rm.bff.dto.products.ProductDetailsDTO;
import com.mindera.rm.bff.persistance.repository.ProductsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProductsService {

//    private final ProductsRepository productsRepository;
    private final ProductsConverter converter;
    private final ProductApi productApi;

    public List<ListProductDetailsDTO> getAllProducts() {
        return productApi.getAllProducts().stream()
                .map(converter::convertToListProductDetailsDTO)
                .collect(Collectors.toList());

    }

    public ProductDetailsDTO getProductById(String id) {
        return converter.convertToProductDetailsDTO(productApi.getProductById(id));
    }
}
