import { scaleConverter } from "../utils/CommonFunction";
import { getHourlyIcons } from "../utils/CommonFunction";
function HourlyList(props){
    const {hourly,scale,sunrise,sunset} = props;
  
    return (  
        <div className="hgrid"> 
     
           <h4 className="desc">HOURLY FORECAST</h4>
           <div className="hourly">
        {
       hourly.map((hour)=>{ 
        return <HourlyItems hour={hour} scale={scale} sunset={sunset} sunrise={sunrise} />})

       }
    </div>
    </div>
  
    )
}


function HourlyItems(props){
    
   
    const{hour,scale,sunrise,sunset} = props;
    const{weather,temp,dt} = hour;
    const{main} = weather[0];
    const tempScale = scaleConverter(scale)
    const Time =(new Date(dt * 1000)).toLocaleTimeString();

    const time = Time.length === 11 ? Time.slice(0,2) : Time.slice(0,1);
    const format =   Time.length === 11 ? Time.slice(9) : Time.slice(8);
    const View = getHourlyIcons(main,sunrise,sunset,dt);

    return <div className="hour">
            <p>{Math.round(temp)}{tempScale}</p>
             {View}
            <p>{time}{format}</p>
       </div>
}
export {HourlyList};