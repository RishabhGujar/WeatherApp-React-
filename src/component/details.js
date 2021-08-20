
import { WiWindDeg,WiHumidity ,WiBarometer} from "react-icons/wi";
import {FaWind} from "react-icons/fa";
import {GiDew} from "react-icons/gi";
import{MdVisibility} from "react-icons/md"
import{scaleConverter} from "../utils/CommonFunction"



function Details(props){
  const{humidity,pressure,visibility,wind_speed,wind_deg,dew_point,scale} = props;
   

  function windConvert(deg){
    const directions = ['north', 'northeast', 'east', 'southeast', 'south', 'southwest', 'west', 'northwest'];
    deg = deg*8/360;
    deg = Math.round(deg,0);
    deg = (deg + 8)%8;
    return directions[deg];
  }
   const tempScale = scaleConverter(scale);

  return (<div className="details">

     <h4 className="description">Details</h4>
     <h3>Humidity <WiHumidity/> :{humidity}%</h3>
     <h3>Pressure <WiBarometer/> :{pressure}hpa</h3>
     <h3>wind <FaWind/> :{Math.round(wind_speed)}m/s</h3>
     <h3>Wind-Directions <WiWindDeg/> :{windConvert(wind_deg)}</h3>
     <h3>Visibility <MdVisibility/> :{Math.round(visibility/1000)}Km</h3>
     <h3>Dew Point < GiDew /> : {Math.round(dew_point)}{tempScale}</h3>

  </div>)
}
  export {Details};