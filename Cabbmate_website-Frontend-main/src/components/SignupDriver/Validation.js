export default function Validation(values){
    const errors ={}
    const email_pattern=/^[^\s@]+@[^\s@]+\.[^s@]{2,6}$/;
    const password_pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

 if(values.name===""){
    errors.name ="name is required!";
 }
 if(values.email=== ""){
    errors.email="email is required"
 }

 else if(email_pattern.test(values.email)){
 errors.email = "email did not macth" 
 }
 if(values.password==""){
    errors.password="password required";
 }else if(password_pattern.test(values.password)){
    errors.password = "password did not match" 
    }
    return errors;
 }
    

 
