/*
 * package com.jpa.test.mode;
 * 
 * import jakarta.persistence.Entity; import jakarta.persistence.GeneratedValue;
 * import jakarta.persistence.GenerationType; import jakarta.persistence.Id;
 * import jakarta.persistence.Table; import lombok.Data; import lombok.ToString;
 * 
 * @Entity
 * 
 * @Table(name="Email_Verification") public class Email_Verification {
 * 
 * @Id
 * 
 * @GeneratedValue(strategy = GenerationType.IDENTITY) Long id; String toEmail;
 * long otp; String subject; String text; public String getToEmail() { return
 * toEmail; } public String getText() { return text; } public void
 * setText(String text) { this.text = text; } public void setToEmail(String
 * toEmail) { this.toEmail = toEmail; } public long getOtp() { return otp; }
 * public void setOtp(long otp) { this.otp = otp; } public String getSubject() {
 * return subject; } public void setSubject(String subject) { this.subject =
 * subject; }
 * 
 * 
 * }
 */