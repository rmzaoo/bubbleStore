package com.mindera.rm.bff.persistance.repository;

import com.mindera.rm.bff.persistance.entity.Product;
import com.mindera.rm.bff.persistance.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductsRepository extends JpaRepository<Product, Long> {
}
