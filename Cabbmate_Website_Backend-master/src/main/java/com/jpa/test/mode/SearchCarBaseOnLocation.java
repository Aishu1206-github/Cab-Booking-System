package com.jpa.test.mode;

public class SearchCarBaseOnLocation {
	
	 private String leavingFrom;
	 private String goingFrom;
	 
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
	@Override
	public String toString() {
		return "SearchCarBaseOnLocation [leavingFrom=" + leavingFrom + ", goingFrom=" + goingFrom + "]";
	}
	 
	 

}
