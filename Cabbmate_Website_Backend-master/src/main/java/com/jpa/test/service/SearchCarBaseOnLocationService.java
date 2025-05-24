package com.jpa.test.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jpa.test.mode.SearchCarBaseOnLocation;
import com.jpa.test.reposetory.SearchCarBaseOnLocationRepository;

@Service
public class SearchCarBaseOnLocationService {
    @Autowired
    private SearchCarBaseOnLocationRepository locationRepository;

    public List<SearchCarBaseOnLocation> findCars(String leavingFrom, String goingFrom) {
    	
    	
        return locationRepository.findByLeavingFromAndGoingFrom(leavingFrom, goingFrom);
    }
}
