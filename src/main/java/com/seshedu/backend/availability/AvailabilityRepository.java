package com.seshedu.backend.availability;

import com.seshedu.backend.education.Education;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AvailabilityRepository extends JpaRepository<Availability, Long> {
    Optional<List<Availability>> findByUserId(Long userId);
}
