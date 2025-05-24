package com.jpa.test.controller;

import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestParam;

import com.jpa.test.mode.PayUHelper;

@Controller
public class PaymentController {
	
	
	 
	  @GetMapping("/")
	  public String setting() {
		  return "setting";
	  }
	  @PostMapping("/paymentpage")
	  public String index() {
		  return "index";
	  }
	 
	  @PostMapping("/pay")
	  public String makePayment(@RequestParam("amount") String amount,
	                            @RequestParam("firstname") String firstname,
	                            @RequestParam("email") String email,
	                            @RequestParam("phone") String phone,
	                            Model model) {

	      String merchantKey = "kCfvU2";
	      String salt = "zC74UxqULFGtYncYm7BoolWhgIrSyuoK";
	      String txnid = String.valueOf(System.currentTimeMillis());
	      String productInfo = "cabbmate";

	     
	      String hash = PayUHelper.generateHash(merchantKey, txnid, amount, productInfo, firstname, email, salt);

	      model.addAttribute("key", merchantKey);
	      model.addAttribute("txnid", txnid);
	      model.addAttribute("amount", amount);
	      model.addAttribute("productinfo", productInfo);
	      model.addAttribute("firstname", firstname);
	      model.addAttribute("email", email);
	      model.addAttribute("phone", phone);
	      model.addAttribute("surl", "http://localhost:8080/payment/success");
	      model.addAttribute("furl", "http://localhost:8080/payment/failure");
	      model.addAttribute("hash", hash);

	    
	      return "payuForm";
	  }
	  @PostMapping("/payment/success")
	  public String successPayment(@RequestParam Map<String, String> response, Model model) {
	     
	      model.addAttribute("response", response);
	      return "paymentSuccess";
	  }

	  @PostMapping("/payment/failure")
	  public String failurePayment(@RequestParam Map<String, String> response, Model model) {
	      
	      model.addAttribute("response", response);
	      return "paymentFailure";
	  }

}
