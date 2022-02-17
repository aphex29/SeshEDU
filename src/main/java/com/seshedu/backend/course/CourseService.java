package com.seshedu.backend.course;

import com.seshedu.backend.account.UserAccount;
import javax.persistence.EntityNotFoundException;
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
        Course newCourseEntry = new Course(classId, newCourse);
        return courseRepo.save(newCourseEntry);
    }

    public List<Course> getCourses(Long classId) {
        return courseRepo.findByUserId(classId)
            .orElseThrow(() -> new EntityNotFoundException("" + classId));

    }

    public void deleteCourse(Long courseId) {
        Course delCourse = courseRepo.findById(courseId)
            .orElseThrow(() -> new EntityNotFoundException("" + courseId));
        courseRepo.delete(delCourse);
    }
}
