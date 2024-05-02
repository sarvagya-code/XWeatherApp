import axios from 'axios';
import { useEffect, useState } from 'react';
import WeatherCard from './WeatherCard';


export default function WeatherDisplay ({city}){

    const [weatherData, setWeatherData] = useState(null)
    const [loading, setLoading] = useState(false);

    const fetchData = async() => {
        axios
            .get("https://api.weatherapi.com/v1/current.json", {
                params: {
                    key:'1adb1ad1fd7e412199582024232710',
                    q: city,
                }
            })
            .then((res) => setWeatherData(res.data))
            .catch((err)=>{
                console.error("Faild to fetch data");
                alert("Failed to fetch weather data")
            })
            .finally(() => {
                setLoading(false);
            })
    };

    useEffect (()=>{
        if(city){
            setLoading(true);
            fetchData();
        }
    },[city]);

    return (
        <div>
            {loading && <p>Loading data...</p>}
            {!loading && weatherData && (
                <div className='weather-cards'>
                    <WeatherCard title="Temprature" data={`${weatherData.current.temp_c}°C`}/>
                    <WeatherCard title="Humidity" data={`${weatherData.current.humidity}%`}/>
                    <WeatherCard title="Condition" data={`${weatherData.current.condition.text}`}/>
                    <WeatherCard title="Wind Speed" data={`${weatherData.current.wind_kph} kph`}/>
                </div>
            )}
        </div>
    )
}