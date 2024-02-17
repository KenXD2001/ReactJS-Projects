import React, { useState } from "react";
import "./Style.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import validateLogin from "./LoginValidation";

function Login() {
    const [values, setValues] = useState({ email: '', password: '' });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const validationErrors = validateLogin(values);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            try {
                const res = await axios.post("http://localhost:8081/login", values);
                if (res.data === "Success") {
                    console.log("Inserted data:", values);
                    navigate("/home");
                } else {
                    alert("Invalid email or password");
                }
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <div className="login-card">
            <h2>Login</h2>
            <h3>Enter your credentials</h3>
            <form className="login-form" onSubmit={handleSubmit}>
                <div>
                    <input type="text" placeholder="Email" name="email" value={values.email} onChange={handleInput} />
                    {errors.email && <span className="text-danger">{errors.email}</span>}
                </div>
                <div>
                    <input type="password" placeholder="Password" name="password" value={values.password} onChange={handleInput} />
                    {errors.password && <span className="text-danger">{errors.password}</span>}
                </div>
                <div>
                    <Link to="/signup">Don't have an account? Create one here.</Link>
                </div>
                <div>
                    <button type="submit">LOGIN</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
