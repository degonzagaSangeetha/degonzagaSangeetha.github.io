function validate() {
    console.log("working");
    
    let isValid = true;

    // Get input values
    const user_name = document.getElementById("uName").value.trim();
    const user_phone = document.getElementById("uPhone").value.trim();
    const user_email = document.getElementById("uEmail").value.trim();
    const user_pwd = document.getElementById("uPwd").value.trim();
    const user_adrs = document.getElementById("uAdrs").value.trim();
    const user_pin = document.getElementById("uPin").value.trim();
    const user_file = document.getElementById("uFile").value;

    // Get error elements
    const error_name = document.getElementById("uName_err");
    const error_phone = document.getElementById("uPhone_err");
    const error_email = document.getElementById("uEmail_err");
    const error_pwd = document.getElementById("uPwd_err");
    const error_adrs = document.getElementById("uAdrs_err");
    const error_pin = document.getElementById("uPin_err");
    const error_file = document.getElementById("uFile_err");
    const errorMessage = document.getElementById("errorMessage");

    // Clear previous error messages
    error_name.textContent = "";
    error_phone.textContent = "";
    error_email.textContent = "";
    error_pwd.textContent = "";
    error_adrs.textContent = "";
    error_pin.textContent = "";
    error_file.textContent = "";
    errorMessage.textContent = "";

    // Name validation
    if (user_name === "") {
        error_name.textContent = "Enter a name";
        isValid = false;
    } else {
        const namePattern = /^[A-Za-z\s]+$/;
        if (!namePattern.test(user_name)) {
            error_name.textContent = "Name must contain only alphabets";
            isValid = false;
        }
    }

    // Gender validation
    const maleOption = document.getElementById("male").checked;
    const femaleOption = document.getElementById("female").checked;

    if (!maleOption && !femaleOption) {
        errorMessage.textContent = "Please select your gender";
        isValid = false;
    }

    // Phone number validation
    if (user_phone === "") {
        error_phone.textContent = "Enter a phone number";
        isValid = false;
    } else {
        const numPattern = /^[0-9]{10}$/;
        if (!numPattern.test(user_phone)) {
            error_phone.textContent = "Phone number must be a 10-digit number";
            isValid = false;
        }
    }

    // Email validation
    if (user_email === "") {
        error_email.textContent = "Enter an email id";
        isValid = false;
    } else {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(user_email)) {
            error_email.textContent = "Invalid email format";
            isValid = false;
        }
    }

    // Password validation
    if (user_pwd === "") {
        error_pwd.textContent = "Enter a password";
        isValid = false;
    } else {
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passwordPattern.test(user_pwd)) {
            error_pwd.textContent = "Password must be at least 8 characters long and include at least one letter and one number";
            isValid = false;
        }
    }

    // Address validation
    if (user_adrs === "") {
        error_adrs.textContent = "Enter an address";
        isValid = false;
    }

    // Pincode validation
    if (user_pin === "") {
        error_pin.textContent = "Enter a pincode";
        isValid = false;
    } else {
        const pincodePattern = /^\d{6}$/;
        if (!pincodePattern.test(user_pin)) {
            error_pin.textContent = "Pincode must be a 6-digit number";
            isValid = false;
        }
    }

    // File validation
    const filePattern = /(\.jpg|\.jpeg|\.png|\.pdf)$/i;
    if (user_file === "") {
        error_file.textContent = "Please upload a profile image";
        isValid = false;
    } else if (!filePattern.test(user_file)) {
        error_file.textContent = "Invalid file extension. Only .jpg, .jpeg, .png, and .pdf are allowed";
        isValid = false;
    }

    return isValid; // Return the validity status
}


document.getElementById("form").addEventListener("submit", function(event) {
    if (!validate()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
    else{
        document.getElementById("success").textContent="Form submitted successfully";
        event.preventDefault();
    }
});
