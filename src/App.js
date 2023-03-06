import WeatherApp from './WeatherApp';
import './App.css';
import React from 'react';
  
async function weather(){
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6439c721c4mshacfa680acaa10e8p154ee2jsn59535e836448',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };
  const place=document.getElementById("city-name").value;
  console.log(place)
  const weatherObj=await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${place}`, options)
  const weatherData=await weatherObj.json();
  return weatherData;
}

function App() {

  const [weatherData,setweatherData] =React.useState(null);

  const handleClick = async () =>{
    const data = await weather();
    setweatherData(data)
  }
  return (
    <div className="container">

         <div className="text-btn">
         <input id="city-name" className="city-name" type="text" placeholder="enter Your city"></input>
         <button className="weather-btn" onClick={handleClick}>get weather</button>
         </div>

         <div>
          {weatherData && <WeatherApp weatherData={weatherData} />}
         </div>
    </div>
  );
}

export default App;
