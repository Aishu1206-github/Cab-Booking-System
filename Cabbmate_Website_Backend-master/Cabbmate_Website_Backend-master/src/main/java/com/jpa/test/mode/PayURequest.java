package com.jpa.test.mode;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

//@Entity
public class PayURequest {
	/*
	 * @GeneratedValue(strategy = GenerationType.IDENTITY) Long id;
	 */
    private String key;
    private String txnid;
    private String amount;
    private String productinfo;
    private String firstname;
    private String email;
    private String phone;
    private String surl;
    private String furl;
    private String hash;
	public String getKey() {
		return key;
	}
	public void setKey(String key) {
		this.key = key;
	}
	public String getTxnid() {
		return txnid;
	}
	public void setTxnid(String txnid) {
		this.txnid = txnid;
	}
	public String getAmount() {
		return amount;
	}
	public void setAmount(String amount) {
		this.amount = amount;
	}
	public String getProductinfo() {
		return productinfo;
	}
	public void setProductinfo(String productinfo) {
		this.productinfo = productinfo;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getSurl() {
		return surl;
	}
	public void setSurl(String surl) {
		this.surl = surl;
	}
	public String getFurl() {
		return furl;
	}
	public void setFurl(String furl) {
		this.furl = furl;
	}
	public String getHash() {
		return hash;
	}
	public void setHash(String hash) {
		this.hash = hash;
	}
	@Override
	public String toString() {
		return "PayURequest [key=" + key + ", txnid=" + txnid + ", amount=" + amount + ", productinfo=" + productinfo
				+ ", firstname=" + firstname + ", email=" + email + ", phone=" + phone + ", surl=" + surl + ", furl="
				+ furl + ", hash=" + hash + "]";
	}
    
    // Getters and Setters
    
    
}
