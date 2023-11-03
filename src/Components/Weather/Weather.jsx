import React from 'react'
import './Weather.css';
import search_icon from '../Assets/search.png'; 
import clear_icon from '../Assets/clear.png'; 
import cloud_icon from '../Assets/cloud.png'; 
import drizzle_icon from '../Assets/drizzle.png'; 
import rain_icon from '../Assets/rain.png'; 
import snow_icon from '../Assets/snow.png';  
import wind_icon from '../Assets/wind.png';
import humidity_icon from '../Assets/humidity.png'; 
import { useState } from 'react';


export default function Weather() {


    let Api_key="43a912915813babf1db07d9aeb63723f";
    const[wicon,setWicon]= useState(cloud_icon);

    const iconMap = {
        '01d': clear_icon,
        '01n': clear_icon,
        '02d': cloud_icon,
        '02n': cloud_icon,
        '03d': drizzle_icon,
        '03n': drizzle_icon,
        '04d': drizzle_icon,
        '04n': drizzle_icon,
        '09d': rain_icon,
        '09n': rain_icon,
        '10d': rain_icon,
        '10n': rain_icon,
        '13d': snow_icon,
        '13n': snow_icon
      };
      


const searchHandler = async()=>{
    const element= document.getElementsByClassName('cityInput');
    if(element[0].value===''){
        return 0;
    }
let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${Api_key}`;

let response=await fetch(url); 
let data= await response.json();
const humidity=document.getElementsByClassName("humidity-percent");
const wind=document.getElementsByClassName("wind-rate");
const temprature=document.getElementsByClassName("weather-temp");
const location=document.getElementsByClassName("weather-loc");
humidity[0].innerHTML=data.main.humidity +"%";
wind[0].innerHTML=Math.floor(data.wind.speed) +"km/h";
temprature[0].innerHTML=Math.floor(data.main.temp)+"°C";
location[0].innerHTML=data.name;

console.log(data.weather[0].icon);

const icon = iconMap[data.weather[0].icon] || clear_icon;
setWicon(icon);
}

  return (
    <div className='container'>
        <div className="top-bar">
            <input type="text" className='cityInput' placeholder='Search' />
            <div className="search-icon" onClick={()=>{searchHandler()}}>
                <img src={search_icon} alt="search" />
            </div>
        </div>

        <div className="weather-img">
            <img src={wicon} alt="cloudd" />
        </div>
        <div className="weather-temp">
        26°C
        </div>

        <div className="weather-loc">
            London
        </div>
<div className="data-containers">
    <div className="element">
        <img src={humidity_icon} alt="" className='icon' />
        <div className="data">
            <div className="humidity-percent">
                64%
            </div>
            <div className="text">Humidity</div>
        </div>
    </div>

    <div className="element">
        <img src={wind_icon} alt="" className='icon' />
        <div className="data">
            <div className="wind-rate">
                18 km/h
            </div>
            <div className="text">Wind Speed</div>
        </div>
    </div>

    </div>      
    </div>
  )
}
