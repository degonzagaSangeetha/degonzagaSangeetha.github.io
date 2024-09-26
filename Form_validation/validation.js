
function validate()
{
let user_name=document.getElementById("uName").value
let user_male=document.getElementById("male").value
let user_female=document.getElementById("female").value
let user_phone=document.getElementById("uPhone").value
let user_email=document.getElementById("uEmail").value
let user_pwd=document.getElementById("uPwd").value
let user_adrs=document.getElementById("uAdrs").value
let user_pin=document.getElementById("uPin").value
let error_name=document.getElementById("uName_err")
let error_male=document.getElementById("male")
let error_female=document.getElementById("female")
let error_phone=document.getElementById("uPhone_err")
let error_email=document.getElementById("uEmail_err")
let error_pwd=document.getElementById("uPwd_err")
let error_adrs=document.getElementById("uAdrs_err")
let error_pin=document.getElementById("uPin_err")

    if(user_name==""){
        error_name.textContent="Enter a name"
    }

    else{
        let namePattern = /^[A-Za-z]+$/;
        if (!namePattern.test(user_name)) {
            error_name.textContent = "Name must contain only alphabets";
        }
  }
    if(user_male==""&& user_female==""){
        error_male.textContent="Enter a gender"
    }
    if(user_phone==""){
        error_phone.textContent="Enter a Phone number"
    }
    else{
        let numPattern = /^[0-9]{10}$/;
        if (!numPattern.test(user_phone)) {
            error_phone.textContent = "Phone number must contain only numbers";
        }
    }
    if(user_email==""){
        error_email.textContent="Enter a email id"
    }

    if(user_pwd==""){
        error_pwd.textContent="Enter a password"
    }
    if(user_adrs==""){
        error_adrs.textContent="Enter a address"
    }
    if(user_pin==""){
        error_pin.textContent="Enter a pincode"
    }


}
