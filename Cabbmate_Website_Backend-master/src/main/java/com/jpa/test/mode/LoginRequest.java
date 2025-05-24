package com.jpa.test.mode;

public class LoginRequest {
	private String username;
	private String password;

	// Getters and Setters

	public String getUsername() {
		return username;
	}

	@Override
	public String toString() {
		return "LoginRequest [username=" + username + ", password=" + password + "]";
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}