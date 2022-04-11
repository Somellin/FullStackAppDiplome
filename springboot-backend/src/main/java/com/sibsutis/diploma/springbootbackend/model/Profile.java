package com.sibsutis.diploma.springbootbackend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "profiles")
public class Profile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String handle;

    @Column(name = "curr_rating")
    private int rating;

    @Column(name = "curr_rank")
    private String rank;

    @Column(name = "max_rating")
    private int maxRating;
    @Column(name = "max_rank")
    private String maxRank;

}