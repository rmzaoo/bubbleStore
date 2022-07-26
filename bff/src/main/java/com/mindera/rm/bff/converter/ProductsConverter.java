package com.mindera.rm.bff.converter;

import com.mindera.rm.bff.adapter.mockserver.model.Product;
import com.mindera.rm.bff.dto.products.ProductDetailsDTO;
import com.mindera.rm.bff.dto.products.ListProductDetailsDTO;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ProductsConverter {
    public ProductDetailsDTO convertToProductDetailsDTO(Product product){
        return ProductDetailsDTO.builder()
                .id(product.getSkuid())
                .name(product.getName())
                .description(product.getDescription())
                .images(List.of(product.getImg()))
                .price(product.getPrice())
                .sizeAvailable(product.getSizeAvailable())
                .category(product.getCategory())
                .newProduct(product.isNewProduct())
                .build();

    }

    public ListProductDetailsDTO convertToListProductDetailsDTO(Product product) {
        return ListProductDetailsDTO.builder()
                .id(product.getSkuid())
                .name(product.getName())
                .images(List.of(product.getImg()))
                .price(product.getPrice())
                .category(product.getCategory())
                .newProduct(product.isNewProduct())
                .build();
    }
}
