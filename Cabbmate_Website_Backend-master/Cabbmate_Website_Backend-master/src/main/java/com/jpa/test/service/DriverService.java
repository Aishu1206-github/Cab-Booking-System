package com.jpa.test.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jpa.test.mode.DriverSignup;
import com.jpa.test.reposetory.DriverRepository;

@Service
public class DriverService {

	  @Autowired
	    private DriverRepository driverRepository;

	    public DriverSignup getDriverByUsernameAndPassword(String username, String password) {
	        return driverRepository.findByUsernameAndPassword(username, password);
	    }
}
