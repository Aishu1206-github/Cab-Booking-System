package com.jpa.test;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.jpa.test.mode.RideRequest;

@SpringBootApplication
public class CabbmateConnectivityApplication {

	public static void main(String[] args) {
		SpringApplication.run(CabbmateConnectivityApplication.class, args);
		
	}

}
