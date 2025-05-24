package com.jpa.test.reposetory;
import org.springframework.data.jpa.repository.JpaRepository; 

import com.jpa.test.mode.RideRequest;


public interface RideRepository extends JpaRepository<RideRequest, Long> {
    // Custom query methods can be added here if needed
}
