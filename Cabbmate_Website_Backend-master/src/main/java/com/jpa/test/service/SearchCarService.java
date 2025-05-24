package com.jpa.test.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.jpa.test.mode.SearchCar;
import com.jpa.test.reposetory.SearchCarRepository;

@Service
public class SearchCarService {
	@Autowired
	SearchCarRepository carRepository;

	public SearchCar postNewCar(SearchCar car) {
		return carRepository.save(car);
	}

	public List<SearchCar> findAllCar() {

		return carRepository.findAll();

	}

}
