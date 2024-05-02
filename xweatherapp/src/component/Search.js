import {useState} from "react";
import "./Search.css";

export default function Search ({onSearch}) {

    const [city, setCity] = useState("");

    const handleSearch =()=>{
        onSearch(city);
    };

    return (
        <div className="search">
            <input className="input" type="text" value={city} onChange={(e)=>setCity(e.target.value)} placeholder="Enter city name"/>
            <button className="button" onClick={handleSearch}>Search</button>
        </div>
    );

};