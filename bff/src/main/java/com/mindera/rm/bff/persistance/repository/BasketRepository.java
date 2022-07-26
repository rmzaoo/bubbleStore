package com.mindera.rm.bff.persistance.repository;

import com.mindera.rm.bff.persistance.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BasketRepository extends JpaRepository<User, Long> {
}
