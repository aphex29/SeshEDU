package com.seshedu.backend.education;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Locale;

@Entity(name = "Education")
@Table(name = "education")
public class Education {
    @Id
    @SequenceGenerator(
            name = "education_sequence",
            sequenceName = "education_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "education_sequence"
    )
    @Column(
            name = "id",
            updatable = false
    )
    private Long id;

    @Column(
            name = "user_id",
            nullable = false
    )
    private Long userId;

    @Column(
            name = "school",
            nullable = false
    )
    private String school;

    @Column(
            name = "degree_type",
            nullable = false
    )
    private String degreeType;

    @Column(
            name = "major",
            nullable = false
    )
    private String major;

    @Column(
            name = "start_year"
    )
    private Integer startYear;

    @Column(
            name = "end_year"
    )
    private Integer endYear;

    public Education() {}

    public Education(Long userId, String school, String degreeType, String major,
                     Integer startYear, Integer endYear) {
        this.userId = userId;
        this.school = school;
        this.degreeType = degreeType;
        this.major = major;
        this.startYear = startYear;
        this.endYear = endYear;
    }

    public Long getId() {
        return id;
    }

    public Long getUserId() {
        return userId;
    }

    public String getSchool() {
        return school;
    }

    public String getDegreeType() {
        return degreeType;
    }

    public String getMajor() {
        return major;
    }

    public Integer getStartYear() {
        return startYear;
    }

    public Integer getEndYear() {
        return endYear;
    }

    public void setSchool(String newSchool) {
        school = newSchool;
    }

    public void setDegreeType(String newType) {
        degreeType = newType;
    }

    public void setMajor(String newMajor) {
        major = newMajor;
    }

    public void setStartYear(Integer newYear) {
        startYear = newYear;
    }

    public void setEndYear(Integer newYear) {
        endYear = newYear;
    }


    @Override
    public String toString() {
        return "Education[id=" + id + ", userId=" + userId + ", school=" + school
                + ", degreeType=" + degreeType + ", major=" + major
                + ", startYear=" + startYear + ", endYear=" + endYear + "]";
    }
}
