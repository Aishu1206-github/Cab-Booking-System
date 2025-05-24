package com.jpa.test.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jpa.test.mode.passengerSignup;
import com.jpa.test.reposetory.passengerSignupRepository;

@RestController
@RequestMapping("/api/signup")
public class PassengerSignupController {
	 @Autowired
	    private passengerSignupRepository  passengerService;

	    @PostMapping("/pasengerSignup")
	    public String driverSignup(@RequestBody passengerSignup passengersignup) {
	    	System.out.println(passengersignup);
	    	passengerService.save(passengersignup);
	        return "Passenger SignUp Sucssefully..";
	    }
		
}
