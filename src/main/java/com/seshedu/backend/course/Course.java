package com.seshedu.backend.course;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity(name = "Course")
@Table(name = "course")
public class Course {
    @Id
    @SequenceGenerator(
        name = "course_sequence",
        sequenceName = "course_sequence",
        allocationSize = 1
    )
    @GeneratedValue(
        strategy = GenerationType.SEQUENCE,
        generator = "course_sequence"
    )
    @Column(
        name = "id",
        updatable = false
    )
    private Long id;

    @Column(
        name = "user_id",
        updatable = false,
        nullable = false
    )
    private Long userId;

    @Column(
        name = "course",
        nullable = false
    )
    private String course;

    public Course(){}
    public Course(Long userId, String course){
        this.userId = userId;
        this.course = course;
    }
    public Long getId() {
        return id;
    }
    public Long getUserId() {
        return userId;
    }
    public String getCourse() { return course; }

    @Override
    public String toString() {
        return "Course[id=" + id + ", userId=" + userId + ", course=" + course + "]";
    }
}
