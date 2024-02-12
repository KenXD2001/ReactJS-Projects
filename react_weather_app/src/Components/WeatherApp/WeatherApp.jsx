import React, { useState, useEffect } from 'react';
import './WeatherApp.css';

import search_icon from '../Assets/search.png';
import clear_icon from '../Assets/clear.png';
import cloud_icon from '../Assets/cloud.png';
import drizzle_icon from '../Assets/drizzle.png';
import rain_icon from '../Assets/rain.png';
import snow_icon from '../Assets/snow.png';
import wind_icon from '../Assets/wind.png';
import humidity_icon from '../Assets/humidity.png';

const WeatherApp = () => {
    const api_key = '5ecdb8fd1c3d8dff27eafb35bc4625d2';

    const [wicon, setWicon] = useState(cloud_icon);
    const [weatherData, setWeatherData] = useState({
        humidity: '',
        windSpeed: '',
        temperature: '',
        location: 'India', // Default location
    });
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        // Fetch weather data when the component mounts
        fetchWeatherData();
    }, []);

    const fetchWeatherData = async () => {
        if (searchQuery === '') return;

        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&units=Metric&appid=${api_key}`;
            const response = await fetch(url);
            const data = await response.json();

            setWeatherData({
                humidity: `${data.main.humidity} %`,
                windSpeed: `${Math.floor(data.wind.speed)} km/h`,
                temperature: `${Math.floor(data.main.temp)}°C`,
                location: data.name,
            });

            setWeatherIcon(data.weather[0].icon);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    const setWeatherIcon = (iconCode) => {
        switch (iconCode) {
            case '01d':
            case '01n':
                setWicon(clear_icon);
                break;
            case '02d':
            case '02n':
                setWicon(cloud_icon);
                break;
            case '03d':
            case '03n':
            case '04d':
            case '04n':
                setWicon(drizzle_icon);
                break;
            case '09d':
            case '09n':
            case '10d':
            case '10n':
                setWicon(rain_icon);
                break;
            case '13d':
            case '13n':
                setWicon(snow_icon);
                break;
            default:
                setWicon(clear_icon);
                break;
        }
    };

    const handleSearch = () => {
        fetchWeatherData();
    };

    return (
        <div>
            <div className='container'>
                <div className='top-bar'>
                    <input
                        type='text'
                        className='cityInput'
                        placeholder='Search'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div className='search-icon' onClick={handleSearch}>
                        <img src={search_icon} alt='search-icon' />
                    </div>
                </div>
                <div className='weather-image'>
                    <img src={wicon} alt='' />
                </div>
                <div className='weather-temp'>{weatherData.temperature}</div>
                <div className='weather-location'>{weatherData.location}</div>
                <div className='data-container'>
                    <div className='element'>
                        <img src={humidity_icon} alt='' className='icon' />
                        <div className='data'>
                            <div className='humidity-percent'>{weatherData.humidity}</div>
                            <div className='text'>Humidity</div>
                        </div>
                    </div>
                    <div className='element'>
                        <img src={wind_icon} alt='' className='icon' />
                        <div className='data'>
                            <div className='wind-rate'>{weatherData.windSpeed}</div>
                            <div className='text'>Wind Speed</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherApp;
