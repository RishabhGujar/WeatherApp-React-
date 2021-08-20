import { scaleConverter } from "../utils/CommonFunction";
import { Icon } from "./Icons";
import { Sun } from "./sun";
function DailyList(props){
    const{daily,scale} = props;
    return <div className="hgrid">
       <h4 className="desc">DAILY FORECAST</h4>
    <div className="daily">
          {daily.map((day)=>{
            return<DailyItems day={day} scale={scale} />
          })}
    </div>
    </div>
  }
  
  
  function DailyItems(props){
    const{day,scale} = props;
    const{temp,weather,sunrise,sunset,dt} = day
    const{max} = temp;
    const{main} = weather[0];
    
    const Time = String(new Date(dt * 1000)) ;
  
    const time = Time.slice(0,4) ;
    const format = Time.slice(4,10) ;
  
    const tempScale = scaleConverter(scale);
  
    return <div className="day">
              <p>{Math.round(max)}{tempScale}</p>
              <Icon main={main} sunrise={sunrise} sunset={sunset}/>
               <div className="DailySun">
                  <Sun sunrise={sunrise} sunset={sunset}/>
               </div>
               <p>{time}</p>
               <p>{format}</p>
            </div>
  
  }
  
  
  
  
  export{DailyList}