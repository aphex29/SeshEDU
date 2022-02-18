package com.seshedu.backend.hobby;

import com.seshedu.backend.education.Education;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface HobbyRepository extends JpaRepository<Hobby, Long> {

    Optional<List<Hobby>> findByUserId(Long userId);//look at education repo - your list is already here
}
