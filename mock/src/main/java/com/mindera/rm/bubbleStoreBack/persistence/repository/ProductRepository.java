package com.mindera.rm.bubbleStoreBack.persistence.repository;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mindera.rm.bubbleStoreBack.enumerators.PromotionType;
import com.mindera.rm.bubbleStoreBack.persistence.entity.Product;
import com.mindera.rm.bubbleStoreBack.persistence.entity.Promotion;
import org.springframework.stereotype.Repository;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;


@Repository
public class ProductRepository {

    private final String productsFilePath = "src/main/resources/products.json";

    private String readJson() throws IOException {
        Path fileName = Path.of(productsFilePath);
        return Files.readString(fileName);
    }

    public final List<Product> getAllProducts() {
        List<Product> productList = new ArrayList<>();
        try {
            String jsonContent = readJson();
            ObjectMapper objectMapper = new ObjectMapper();
            productList = objectMapper.readValue(jsonContent, new TypeReference<List<Product>>() {
            });
        } catch (Exception e) {
            e.printStackTrace();
        }
        return productList;
    }

    public final Product getProductByID(String id) {

        List<Product> productList = getAllProducts();
        Product product = productList.stream().filter(p -> id.equals(p.getSkuid())).findFirst().orElse(null);
        product.setPromotions(PromotionType.getPromotionType(product.getSkuid()));


        return product;
    }
}
