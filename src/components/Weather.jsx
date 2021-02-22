import './weather.css';
import React, { useEffect, useState } from 'react';
import axios from "axios";

function Weather() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Karachi")
  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=5e473d22a22d41296b3601b7e0fbac65`
      const response = await fetch(url)
      const resJson = await response.json();
      setCity(resJson.main)
    }
    fetchApi()
  }, [search])
  return (
    <div>
      <div className="inputdata">
        <input
          className="input"
          type="search"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value)
          }}
        />
      </div>
      {!city ? (
        <p className="error">No Data Found</p>
      ) : (
          <div className="info">
            <h2 className="temp">
              {search}
            </h2>
            <h1 className="locate">
              {city.temp}°Cel
     </h1>
            <h3 className="why"> Min : {city.temp_min}°Cel | Max :  {city.temp_min}°Cel</h3>
          </div>
        )}
    </div>
  );
}

export default Weather;
