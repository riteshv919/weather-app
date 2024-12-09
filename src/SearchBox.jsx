import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import "./SearchBox.css"
import { useState } from 'react';


function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "7eedd280ace1822112406d3351acd638";

    let getWeatherInfo = async () => {
      let response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);

       let jsonResponse = await response.json();
       console.log(jsonResponse);

       let result = {
        temp: jsonResponse.main.temp,
        tempMin:jsonResponse.main.temp_min,
        
        tempMax:jsonResponse.main.temp_max,
        humidity:jsonResponse.main.humidity,
        feelsLike:jsonResponse.main.feelsLike,
        weather:jsonResponse.weather[0].description,

       };
       console.log(result);
       return result;
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async(evt) => {
        evt.preventDefault();

        console.log(city);
        setCity("")
      let newInfo = await  getWeatherInfo();
       updateInfo(newInfo);
        
    };


    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City name" variant="outlined" required value={city} onChange={handleChange} />
                <br /> <br />
                <Button variant="contained" type="submit">Search</Button>

            </form>
        </div>
    );
}

export default SearchBox;
