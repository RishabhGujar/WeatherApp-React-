import React, {  useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import{WindMillLoading} from "./loading";
import { HeadWeather } from './App';


const APIkey= "4d7394a873045264897425f7227fcf79";





function MainWeather(){
   const [data,setdata] = useState([]);
   const [lat,setLat]= useState([]);
   const [lon,setLong] = useState([])
   const [scale,setScale] = useState(false);
   const metric = scale ? "imperial" : "metric";
  
   useEffect(()=>{
     
      let getLocation = async()=>{
      navigator.geolocation.getCurrentPosition(function(position){
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
      });

      await  fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&&appid=${APIkey}&units=${metric}`).then(res=>{
      return res.json()
       }).then(result=>{
      setdata(result);
     
      
      })
      }

      getLocation();
      
      },[lat,lon,scale,metric])

   function handleClick(){
      setScale(!scale);
    }

    const view = (
      <> 
         <HeadWeather data={data} handleClick={handleClick} scale={scale} />  
      </>
    )
   
   return (data.current===undefined  ? <WindMillLoading/> : view) ;
}





function App(){
  return <div>
    <MainWeather/>
  </div>
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);




