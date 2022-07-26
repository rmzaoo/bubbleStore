package com.mindera.rm.bff.persistance.repository;

import com.mindera.rm.bff.persistance.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AuthRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}
