import React, { useState, useEffect } from "react";

import "./Search.css";
 

const Search=()=>{
  const[city, setCity]= useState(null);
   
   const[search,setSearch]=useState();


  useEffect(()=>{
    const fetchApi=async ()=>{
       const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=62975d715dc2e329a5c3f26a63ec4fcf`
       const res=await fetch(url)
       const data= await res.json();
      // console.log(data.main);
       setCity(data.main);
        
        
    };
    fetchApi();
  },[search]);
 

  return (
    <>
    <div className="Search">
      <label className="Search__label">
        <input
          className="Search__input"
          value={search}
          placeholder="Search place eg.delhi"
          onChange={ (event)=>{
            setSearch(event.target.value)
            }}
        />
      </label>
      <button className="Search__button" >
        Search
      </button>
    </div>

{ !city ?(<p className="Down">Search to get weather details</p>)
  
  :(
    <div className="Weather">
      <ul className="Weather__list">

      <h1 className="location">
   <i className="fas fa-street-view" ></i>{"   "}{search}
    </h1>

        <li className="list__temperature">
        <i className="fas fa-temperature-high"></i>{"       "}{Math.round(city.temp)}
          <sup className="list__temperature-symbol">°F</sup>
        </li>

         <li> Humidity: {city.humidity}% </li>
         <li> Pressure: {city.pressure} </li>
        

         <li> Min_temp: {city.temp_min} {" "}||{" "} Max_temp: {city.temp_max}</li>
         
      </ul>
    
    
  </div>
  )

  }
  </>
  );
}

export default Search;
