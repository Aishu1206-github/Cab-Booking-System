package com.jpa.test.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.jpa.test.mode.SearchCar;
import com.jpa.test.mode.SearchCarBaseOnLocation;
import com.jpa.test.reposetory.SearchCarBaseOnLocationRepository;
import com.jpa.test.reposetory.SearchCarRepository;
import com.jpa.test.service.SearchCarService;

@RestController
public class SearchCarController {
	@Autowired
	private SearchCarService carService;
	@Autowired
	SearchCarBaseOnLocationRepository carRepository;
	
	@Autowired
	SearchCarRepository searchCarRepository;
	
	@PostMapping("/searchcar")
	public String postNewCar(@RequestBody SearchCar car) {
		System.out.println(car);
		carService.postNewCar(car);
		 return "Sucessfully" ;
	 }
	@GetMapping("/searchcar")
	public List<SearchCar> findAllCar(){
		
		return carService.findAllCar();
		
	}
	@GetMapping("/searchSortCar")
	@ResponseBody
	public List<SearchCar> findBy(@RequestBody SearchCarBaseOnLocation baseOnLocation){
		
	
		return  searchCarRepository.findAll() ;
	
	}
}
