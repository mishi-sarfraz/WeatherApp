
import './App.css';

import React, { useState } from 'react'
import axios from 'axios';

function App() {
  const getWeather=(e)=>{e.preventDefault()
    axios.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=dd4503ef434dfdca00fbcb3d262d98ea')
    .then(function (response) {
      // handle success
      console.log(response);
      setWeather((response.data.main.temp-273.15).toFixed(2))
      setDes((response.data.main.humidity))
      //setDes((response.data.ma))
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }
  const [city,setCity]=useState("")
  const [weather,setWeather]=useState("")
  const [des,setDes]=useState("")
  return (
    <div className="background-image" >
      <h2 className="title">Current Weather</h2>
     <form className="form" onSubmit={getWeather}>
  <input type="text"  className="textbox" value={city} onChange={(e)=>setCity(e.target.value)} />
  <input type="submit" defaultValue="search" />
  </form>
  
  <p className="form" style={{color:'black'}}>Current Temperature:<b>{weather}°C</b></p>
  <p className="form" style={{color:'black'}}> Humidity level is {des>=40 ? 'good' : 'poor'} which is {des}%</p>


    </div>
  )
}

export default App
