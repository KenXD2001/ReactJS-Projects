import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";


const SignInForm = () => {
    return (
        <div class="login-card">
            <h2>Login</h2>
            <h3>Enter your credentials</h3>
            <form class="login-form">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <Link to="/signup" type="submit">Don't have an account? Create one here.</Link>
                <button type="submit">LOGIN</button>
            </form>
        </div>
    );
};

export default SignInForm;
