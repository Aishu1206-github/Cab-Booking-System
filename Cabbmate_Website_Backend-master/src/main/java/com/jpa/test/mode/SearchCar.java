package com.jpa.test.mode;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class SearchCar {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String leavingFrom;
    private String goingFrom;
    private String carType;

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLeavingFrom() {
        return leavingFrom;
    }

    public void setLeavingFrom(String leavingFrom) {
        this.leavingFrom = leavingFrom;
    }

    public String getGoingFrom() {
        return goingFrom;
    }

    public void setGoingFrom(String goingFrom) {
        this.goingFrom = goingFrom;
    }

    public String getCarType() {
        return carType;
    }

    public void setCarType(String carType) {
        this.carType = carType;
    }

    @Override
    public String toString() {
        return "SearchCar [id=" + id + ", leavingFrom=" + leavingFrom + ", goingFrom=" + goingFrom + ", carType="
                + carType + "]";
    }
}
