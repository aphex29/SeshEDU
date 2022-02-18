package com.seshedu.backend.education;

import javax.persistence.*;

@Entity(name = "Educationtemp")
@Table(name = "educationtemp")
public class EducationTemp {
    @Id
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "education_sequence"
    )
    @Column(
            name = "id",
            updatable = false
    )
    Long id;



    @Column(
            name = "user_id",
            nullable = false
    )
    Long userId;

    @Column(
            name = "school",
            nullable = false
    )
    String school;

    @Column(
            name = "degree_type",
            nullable = false
    )
    String degreeType;

    @Column(
            name = "major",
            nullable = false
    )
    String major;

    @Column(
            name = "start_year",
            nullable = false
    )
    Integer startYear;

    @Column(
            name = "end_Year",
            nullable = false
    )
    Integer endYear;
}
