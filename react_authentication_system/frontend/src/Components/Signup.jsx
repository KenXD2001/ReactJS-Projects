import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";

const SignUpForm = () => {
    return (
        <div className="login-card">
            <h2>Signup</h2>
            <h3>Enter your credentials</h3>
            <form className="login-form">
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email" />
                <input type="tel" placeholder="Phone No" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <Link to="/" >Already have an account? Login here.</Link>
                <button type="submit">Create Account</button>
            </form>
        </div>
    );
};

export default SignUpForm;
