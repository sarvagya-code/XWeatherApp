import './App.css';
import {useState} from "react";
import Search from "./component/Search.js";
import WeatherDisplay from "./component/WeatherDisplay.js";

function App() {

  const [city, setCity] = useState("");

  const handleSearch = (searchCity) => {
    setCity(searchCity);
  }
  return (
    <div className="App">
      <Search onSearch={handleSearch}/>
      <WeatherDisplay city={city}/>
    </div>
  );
}

export default App;
