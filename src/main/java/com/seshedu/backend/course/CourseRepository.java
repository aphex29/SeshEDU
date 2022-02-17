package com.seshedu.backend.course;

import com.seshedu.backend.education.Education;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {
  Optional<List<Course>> findByUserId(Long userId);
}
