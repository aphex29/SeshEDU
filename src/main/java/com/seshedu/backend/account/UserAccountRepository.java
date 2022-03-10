package com.seshedu.backend.account;

import com.seshedu.backend.education.Education;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserAccountRepository extends JpaRepository<UserAccount, Long> {

    Optional<UserAccount> findByUsername(String username);

    @Query("select count(p) = 1 from UserAccount p where username = ?1")
    boolean findExistByUsername(String username);
}
