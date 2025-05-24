package com.jpa.test.reposetory;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jpa.test.mode.DriverSignup;


public interface DriverSignupRepository extends JpaRepository<DriverSignup, Long>{
	
}