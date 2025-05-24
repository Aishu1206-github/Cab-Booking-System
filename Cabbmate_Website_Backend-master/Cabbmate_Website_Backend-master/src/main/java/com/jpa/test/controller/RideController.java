package com.jpa.test.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jpa.test.mode.RideRequest;
import com.jpa.test.reposetory.RideRepository;

@RestController
@RequestMapping("/api/rides")
public class RideController {
	@Autowired
	RideRepository repository;

    @PostMapping("/book")
    public String bookRide(@RequestBody RideRequest rideRequest) {
    	System.out.println(rideRequest);
    	repository.save(rideRequest);
        return "Ride Booked Sucssefully..";
    }
}
