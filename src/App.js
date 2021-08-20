
import React, { useEffect, useState } from 'react';
import { Details } from './component/details';
import{scaleConverter,getTheme} from "./utils/CommonFunction";
import { Sun } from './component/sun';
import{Icon} from  './component/Icons';
import { HourlyList } from './component/hour';
import { DailyList } from './component/dailyList';
import{TiArrowUpThick,TiArrowDownThick} from "react-icons/ti";







function HeadWeather(props){
    const{data,scale} = props;
    const{current,hourly,daily} = data;
    const themeObj = getTheme(current.weather[0].main,current.sunset,current.sunrise)
    return (<div className="container" style={{background:themeObj['background'] , backgroundImage:themeObj.backgroundImage}}>
            <MainDisplay current={current} hourly={hourly} daily={daily} handleClick={props.handleClick} scale={scale}/>
       </div>)
}




function MainDisplay(props){

  const[date,setDate] = useState('');
  const{current,hourly,daily,scale} = props;
  const{weather,visibility}=current;
  const{temp,feels_like,pressure,humidity} = current;
  const{main,description} = weather[0];
   
  const{sunrise,sunset,wind_speed,wind_deg,dew_point} = current;
  const{day,night} = daily[0].temp;
 
  
  useEffect(()=>{
    let timerid = setInterval(()=>{
      const dat = new Date();
      setDate(String(dat).slice(0,25));
    })
    return ()=>{
      clearInterval(timerid);
    }
  },[date]);


   
   
   const tempScale = scaleConverter(scale);
  
   return (
  
       <div>
           <h2>{date}</h2>
           <button className="btn" onClick={()=>{props.handleClick()}}>Scale {tempScale}</button>

           <div className="mTContainer">

               <div className="Main-temp">
                    <h6 id="min-Max">Day : {Math.round(day)} <TiArrowUpThick/> Night :{Math.round(night)}<TiArrowDownThick/></h6>
                    <h1 id="MainTemp">{Math.round(temp)}{tempScale}</h1>
               <h4>Feels:{Math.round(feels_like)}{tempScale}</h4>
               </div>

               <div className="iconGroup"> 
                   <Icon main={main} sunrise={sunrise} sunset={sunset}/>
                    <h4>{description}</h4>
               </div>
             
            </div>

            <HourlyList hourly={hourly} scale={scale} sunrise={sunrise} sunset={sunset}/>
            <DailyList  daily ={daily} scale={scale} />

            <div className="sun">
                <Sun sunrise={sunrise} sunset={sunset}/>
            </div>
           
           
               <Details visibility={visibility} pressure={pressure} humidity={humidity} wind_speed={wind_speed} wind_deg={wind_deg} dew_point={dew_point} scale={scale}/>
            
     </div>
     
 )
}

export {HeadWeather}