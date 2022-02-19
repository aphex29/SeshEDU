package com.seshedu.backend.course;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Map;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
public class CourseController {
    CourseService service;

    @Autowired
    public CourseController(CourseService service) {
        this.service = service;
    }

    @PostMapping("/api/v1/create/course")
    public Course addCourse(@RequestBody Map<String, String> json) {
        return null;
    }

    @PostMapping("/api/v1/get/course/all")
    public List<Course> getCourses(@RequestBody Map<String, String> json) {
        return null;
    }

    @PostMapping("/api/v1/delete/course")
    public void deleteCourse(@RequestBody Map<String, String> json) {
    }
}
