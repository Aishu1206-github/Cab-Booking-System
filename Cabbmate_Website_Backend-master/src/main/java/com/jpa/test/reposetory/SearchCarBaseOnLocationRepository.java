package com.jpa.test.reposetory;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jpa.test.mode.SearchCar;
import com.jpa.test.mode.SearchCarBaseOnLocation;

@Repository
public interface SearchCarBaseOnLocationRepository extends JpaRepository<SearchCar, Long> {
    List<SearchCarBaseOnLocation> findByLeavingFromAndGoingFrom(String leavingFrom, String goingFrom);
}
