import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <div className="home-div glass-container">
                <h1 className="home-h1">Welcome</h1>
                <p className="home-p">Welcome to the Home Page. You got successfully logged in to the home page</p>
                <Link to="/" className="home-btn">Sign Out</Link>
            </div>
        </div>
    )
}

export default Home;
