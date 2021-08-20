import {Details} from './details' ;
import "../index.css";
import {Sun} from './sun';
import{TiArrowUpThick,TiArrowDownThick} from "react-icons/ti";
import { Icon } from './Icons';
function SecondaryDisplay(props){
     const{daily} =props;
     const{dew_point,temp,weather,wind_deg,wind_speed,feels_like,sunrise,sunset,pressure,humidity} = daily;
     const{main,description} = weather[0];
     const{day,morning,night}  = temp;
     const tempScale =  <sup>°C</sup> ;
     return <>
             
            <h1>fetching location</h1>
          
            <div className="mTContainer">

                <div className="Main-temp">
                     <h6 id="min-Max">Day : {Math.round(morning)} <TiArrowUpThick/> Night :{Math.round(night)}<TiArrowDownThick/></h6>
                     <h1 id="MainTemp">{Math.round(temp)}{tempScale}</h1>
                <h4>Feels:{Math.round(feels_like.day)}{tempScale}</h4>
                </div>

                <div className="iconGroup"> 
                    <Icon main={main} sunrise={sunrise} sunset={sunset}/>
                     <h4>{description}</h4>
                </div>
              
             </div>
             
             <div className="sun">
                 <Sun sunrise={sunrise} sunset={sunset}/>
             </div>
            
            
            <Details  pressure={pressure} humidity={humidity} wind_speed={wind_speed} wind_deg={wind_deg} dew_point={dew_point}/>
             
     </>
}





export{SecondaryDisplay};