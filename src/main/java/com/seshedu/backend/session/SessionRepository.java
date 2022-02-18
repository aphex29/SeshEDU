package com.seshedu.backend.session;

import com.seshedu.backend.education.Education;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SessionRepository extends JpaRepository<Session, Long> {


    Optional<List<Session>> findByUserId(Long userId);
}
