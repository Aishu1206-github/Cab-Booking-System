package com.jpa.test.controller;

import java.util.List; 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jpa.test.mode.DriverSignup;
import com.jpa.test.reposetory.DriverSignupRepository;
import com.jpa.test.service.DriverService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/signup")
public class DriverSignupController {

    @Autowired
    private DriverSignupRepository signupRequestRepository;

    @Autowired
    private DriverService driverService;

    @PostMapping("/dSignup")
    public String driverSignup(@RequestBody DriverSignup signupRequest) {
    	System.out.println(signupRequest);
    	signupRequestRepository.save(signupRequest);
        return "successefully."+signupRequest.getUsername();
    }
	
    @GetMapping
    public ResponseEntity<List<DriverSignup>> getAllSignupRequests() {
        List<DriverSignup> requests = signupRequestRepository.findAll();
        return new ResponseEntity<>(requests, HttpStatus.OK);
    }

   

    // Endpoint to delete a signup request by ID
	/*
	 * @DeleteMapping("/{id}") public ResponseEntity<String>
	 * deleteSignupRequest(@PathVariable Long id) { if
	 * (signupRequestRepository.existsById(id)) {
	 * signupRequestRepository.deleteById(id); return new
	 * ResponseEntity<>("Signup request deleted successfully", HttpStatus.OK); }
	 * else { return new ResponseEntity<>("Signup request not found",
	 * HttpStatus.NOT_FOUND); } }
	 */
}
