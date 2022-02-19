package com.seshedu.backend.user.person;

import com.seshedu.backend.education.Education;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonRepository extends JpaRepository<Person, Long> {
  Optional<Person> findByUsername(String username);
  //returns all users in a city that does not contain username that calls for the method
  Optional<List<Person>> findByCityAndUsernameNot(String city, String username);

  Optional<List<Person>> findByCityAndIdNot(String city, Long id);
}
