import React, { useState } from "react";
import "./Style.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import validateSignup from "./SignupValidation";

function SignUpForm() {
    const [values, setValues] = useState({ fullName: '', email: '', phone: '', password: '', confirmPassword: '' });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const validationErrors = validateSignup(values);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            try {
                await axios.post("http://localhost:8081/signup", values);
                console.log("Inserted data:", values);
                navigate("/");
            } catch (error) {
                console.log(error);
            }
        }
    };


    return (
        <div className="login-card">
            <h2>Signup</h2>
            <h3>Enter your credentials</h3>
            <form className="login-form" onSubmit={handleSubmit}>
                <div>
                    <input type="text" placeholder="Full Name" name="fullName" value={values.fullName} onChange={handleInput} />
                    {errors.fullName && <span className="text-danger">{errors.fullName}</span>}
                </div>
                <div>
                    <input type="email" placeholder="Email" name="email" value={values.email} onChange={handleInput} />
                    {errors.email && <span className="text-danger">{errors.email}</span>}
                </div>
                <div>
                    <input type="tel" placeholder="Phone No" name="phone" value={values.phone} onChange={handleInput} />
                    {errors.phone && <span className="text-danger">{errors.phone}</span>}
                </div>
                <div>
                    <input type="password" placeholder="Password" name="password" value={values.password} onChange={handleInput} />
                    {errors.password && <span className="text-danger">{errors.password}</span>}
                </div>
                <div>
                    <input type="password" placeholder="Confirm Password" name="confirmPassword" value={values.confirmPassword} onChange={handleInput} />
                    {errors.confirmPassword && <span className="text-danger">{errors.confirmPassword}</span>}
                </div>
                <div>
                    <Link to="/">Already have an account? Login here.</Link>
                </div>
                <div>
                    <button type="submit">Create Account</button>
                </div>
            </form>
        </div>
    );
}

export default SignUpForm;
