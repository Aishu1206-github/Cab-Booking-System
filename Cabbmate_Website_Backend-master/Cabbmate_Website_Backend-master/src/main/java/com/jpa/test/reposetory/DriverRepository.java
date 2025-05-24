package com.jpa.test.reposetory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jpa.test.mode.DriverSignup;

@Repository
public interface DriverRepository extends JpaRepository<DriverSignup, Long> {
    DriverSignup findByUsernameAndPassword(String username, String password); // Query by username and password
}
