import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo]=useState({
        city:"Delhi",
        feelsLike:15.66,
        humidity: 28,
        temp: 17.16,
        tempMax: 17.16,
        tempMin: 17.16,
        weather: "clear sky"
    });
    let updateInfo=(newInfo)=>{
           setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h1>Weather App</h1>
        <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}