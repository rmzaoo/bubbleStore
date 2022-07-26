package com.mindera.rm.bff.persistance.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Getter
@Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column()
    private String name;

    @Column()
    private String description;

    @ElementCollection
    private List<String> images = new ArrayList<>();

    @Column()
    private Double price;

    @ElementCollection
    private Map<String, String> sizeAvailable;

    @ElementCollection
    private Map<String, String> category;

    @Column(name = "new")
    private boolean newProduct;

}
