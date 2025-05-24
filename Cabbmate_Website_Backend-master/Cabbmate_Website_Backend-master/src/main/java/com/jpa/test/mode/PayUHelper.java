package com.jpa.test.mode;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class PayUHelper {

    public static String hashCal(String str) {
        StringBuilder hashString = new StringBuilder();
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-512");
            byte[] hash = md.digest(str.getBytes());
            for (byte b : hash) {
                hashString.append(String.format("%02x", b));
            }
        } catch (NoSuchAlgorithmException e) {
        System.out.println("payU PayUHelper class issue");
        }
        return hashString.toString();
    }

    public static String generateHash(String key, String txnid, String amount, String productInfo, String firstname, String email, String salt) {
        String hashString = key + "|" + txnid + "|" + amount + "|" + productInfo + "|" + firstname + "|" + email + "|||||||||||" + salt;
        return hashCal(hashString);
    }
}
