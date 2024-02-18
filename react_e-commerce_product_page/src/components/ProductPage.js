import React, { useState } from 'react';
import ChetakLogo from "./Images/Chetak_logo.png";
import ChetakIndigoBlue from "./Images/chetak_indigo-blue.png";
import ChetakHazelnut from "./Images/chetak_hazelnut.png";
import ChetakBrooklynBlack from "./Images/chetak_brooklyn-black.png";
import "./ProductPage.css";

const ProductPage = () => {
    const [selectedColor, setSelectedColor] = useState("indigo-blue");

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };

    const renderVehicleImage = () => {
        switch (selectedColor) {
            case "indigo-blue":
                return ChetakIndigoBlue;
            case "hazelnut":
                return ChetakHazelnut;
            case "brooklyn-black":
                return ChetakBrooklynBlack;
            default:
                return ChetakIndigoBlue;
        }
    };

    return (
        <div>
            <div className='header-bar'>
                <div className='header-logo'>
                    <img src={ChetakLogo} className="chetak-logo" alt="Chetak-Logo" />
                </div>

                <div className='nav-div'>
                    <nav className='nav'>
                        <ul className="navbar">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <button className='head-btn'>Test Drive</button>
                </div>
            </div>
            <div className='main-body'>
                <div className='left-section'>
                    <h2>CHETAK PREMIUM</h2>
                    <h1>S 150 ABS</h1>
                    <p>Chetak Premium S 150 ABS is a high performance two wheelers</p>
                    <h3>Choose Your Color</h3>
                    <div className='color-select-div'>
                        <button onClick={() => handleColorChange("indigo-blue")} className='indigo-blue slt-btn-style'></button>
                        <button onClick={() => handleColorChange("hazelnut")} className='hazelnut slt-btn-style'></button>
                        <button onClick={() => handleColorChange("brooklyn-black")} className='brooklyn-black slt-btn-style'></button>
                    </div>
                    <button className='button'>Know More</button>

                </div>
                <div className='right-section'>
                    <div className='Chetak-image'>
                        <img src={renderVehicleImage()} alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
