package com.mindera.rm.bff.persistance.entity;

import lombok.*;

import javax.persistence.*;


@Getter
@Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "users_id_generator"
    )
    @SequenceGenerator(
            name = "users_id_generator",
            allocationSize = 1,
            sequenceName = "users_id_generator"
    )
    private Long id;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false)
    private String password;


}
