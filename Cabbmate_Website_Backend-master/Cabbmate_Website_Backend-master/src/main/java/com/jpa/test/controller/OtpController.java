package com.jpa.test.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.jpa.test.service.EmailService;

@Controller
public class OtpController {

    @Autowired
    private EmailService emailService;

    private final Map<String, String> otpStorage = new HashMap<>();
    
    @PostMapping("/reset")
    public String email() {
    	return "Email";
    }
    
    @PostMapping("/send")
    public String sendOtp(@RequestParam String toEmail) {
    	System.out.println(toEmail);
        String otp = String.format("%04d", new Random().nextInt(10000));
        System.out.println(otp+" "+toEmail);
        
        emailService.sendEmail(toEmail, "Your OTP Code", "Your OTP is: " + otp);
        otpStorage.put(toEmail, otp); 
        return "verification";
    }

    @PostMapping("/verify")
    @ResponseBody
    public String verifyOtp(@RequestParam String toEmail, @RequestParam String otp) {
        String storedOtp = otpStorage.get(toEmail);
        if (storedOtp != null && storedOtp.equals(otp)) {
            otpStorage.remove(toEmail); // Clear the OTP after successful verification
            return "OTP verified successfully!";
        }
        return "Invalid OTP!";
    }
}
