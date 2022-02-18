package com.seshedu.backend.course;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {
    CourseRepository courseRepo;

    @Autowired
    public CourseService(CourseRepository courseRepo) {
        this.courseRepo = courseRepo;
    }

    public Course addCourse(Long classId, String newCourse) {
        return null;
    }

    public List<Course> getCourses(Long courseId) {
        return null;
    }

    public void deleteCourse(Long courseId) {

    }
}
