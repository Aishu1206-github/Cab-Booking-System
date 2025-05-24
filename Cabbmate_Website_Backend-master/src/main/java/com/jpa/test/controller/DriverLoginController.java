package com.jpa.test.controller;
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.*;

import com.jpa.test.mode.DriverSignup;
import com.jpa.test.service.DriverService;
import com.jpa.test.mode.LoginRequest;
@RestController
@RequestMapping("/api/drivers")
public class DriverLoginController {

    @Autowired
    private DriverService driverService;

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest loginRequest) {
        // Validate inpute
    	System.out.println(loginRequest);
        if (loginRequest.getUsername() == null || loginRequest.getPassword() == null) {
            throw new RuntimeException("Username and password are required.");
        }

        // Retrieve driver
        DriverSignup driver = driverService.getDriverByUsernameAndPassword(
            loginRequest.getUsername(), 
            loginRequest.getPassword()
        );

        if (driver == null) {
            throw new RuntimeException("Invalid username or password.");
        }

        return loginRequest.getUsername()+" Sucessefully Loging.."; // Send driver details as response
    }
}

/*
 * @PostMapping("/login") public ResponseEntity<List<DriverSignup>>
 * getAllSignupRequests(@RequestBody LoginRequest loginRequest) {
 * System.out.println(loginRequest); if (loginRequest.getUsername() == null ||
 * loginRequest.getPassword() == null) { throw new
 * RuntimeException("Username and password are required."); }
 * 
 * // Retrieve driver DriverSignup driver =
 * driverService.getDriverByUsernameAndPassword(loginRequest.getUsername(),
 * loginRequest.getPassword());
 * 
 * if (driver == null) { throw new
 * RuntimeException("Invalid username or password."); } return new
 * ResponseEntity<>(HttpStatus.OK); }
 */