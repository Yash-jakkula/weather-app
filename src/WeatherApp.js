import React from "react";
import './App.css';
export default function WeatherApp(props){
    const sunrise = new Date(props.weatherData.sunrise * 1000).toLocaleTimeString('en-IN', {timeZone: 'Asia/Kolkata'});
const sunset = new Date(props.weatherData.sunset * 1000).toLocaleTimeString('en-IN', {timeZone: 'Asia/Kolkata'});
return(
    <div className="weather-content">
         
        <div>
            <h4>weather report</h4>
        </div>
        
        <div className="weather-report-content">
            <h4>humidity: {props.weatherData.humidity}</h4>
           
           <h4>max-temp: {props.weatherData.max_temp}<span>&#8451;</span></h4>
           
           <h4>min_temp: {props.weatherData.min_temp}<span>&#8451;</span></h4>
           
           <h4>sunrise: {sunrise}</h4>
           
           <h4>sunset: {sunset}</h4>
           
        </div>

    </div>
)
}