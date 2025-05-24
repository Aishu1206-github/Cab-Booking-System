package com.jpa.test.reposetory;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jpa.test.mode.SearchCar;

public interface SearchCarRepository extends JpaRepository<SearchCar, Long>{
	

}
