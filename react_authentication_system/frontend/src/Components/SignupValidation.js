const validateSignup = (values) => {
    const errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
    const phonePattern = /^\+?[1-9]\d{1,14}$/;

    if (!values.fullName.trim()) {
        errors.fullName = "Full Name should not be empty";
    }

    if (!values.email.trim()) {
        errors.email = "Email should not be empty";
    } else if (!emailPattern.test(values.email)) {
        errors.email = "Invalid email format";
    }

    if (!values.phone.trim()) {
        errors.phone = "Phone No should not be empty";
    } else if (!phonePattern.test(values.phone)) {
        errors.phone = "Invalid phone number format";
    }

    if (!values.password.trim()) {
        errors.password = "Password should not be empty";
    } else if (!passwordPattern.test(values.password)) {
        errors.password = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number";
    }

    if (!values.confirmPassword.trim()) {
        errors.confirmPassword = "Confirm Password should not be empty";
    } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = "Password does not match";
    }

    return errors;
};

export default validateSignup;
