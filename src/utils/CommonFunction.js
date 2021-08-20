function windConvert(deg){
    const directions = ['north', 'northeast', 'east', 'southeast', 'south', 'southwest', 'west', 'northwest'];
    deg = deg*8/360;
    deg = Math.round(deg,0);
    deg = (deg + 8)%8;
    return directions[deg];
  }
  
function scaleConverter(scale){
    const celsius =  <sup>°C</sup> ;
    const fahrenhit = <sup>°F</sup> ;
    return scale ? fahrenhit : celsius ;
  }
function getTheme(weather,sunset,sunrise){
    const current = Number(String(new Date()).slice(16,18));
    let SunRise = Number(String(new Date(sunrise*1000)).slice(16,18))
    let SunSet = Number(String(new Date(sunset*1000)).slice(16,18))
     const themeObj = {}
       if(current>=SunRise && current<SunSet){
             if(weather==="Rain"){   
                  themeObj.background = "#000000;"
                  themeObj.backgroundImage = "linear-gradient(315deg, #000000 0%, #414141 74%)";
                  return themeObj;
             }
            
             else if(weather==="Clouds"){
                 themeObj.background =  "#485461;";
                 themeObj.backgroundImage = "linear-gradient(315deg, #485461 0%, #28313b 74%)";
                 return themeObj;
               
             }
          else{
                 themeObj.background = '#000000;'; 
                 themeObj.backgroundImage = "linear-gradient(147deg, #000000 0%, #2c3e50 74%)" ;
                 return themeObj;
          }
      }
      else{    
             if(weather==="Rain"){   
              themeObj.background = "#000000;"
              themeObj.backgroundImage = "linear-gradient(315deg, #000000 0%, #414141 74%)";
              return themeObj;
              
             }
            else if(weather==="Clouds"){
              themeObj.background = "#000000;"
              themeObj.backgroundImage = "linear-gradient(315deg, #485461 0%, #28313b 74%)";
              return themeObj;
            }
            else{
              themeObj.background = '#000000;'; 
              themeObj.backgroundImage = "linear-gradient(147deg, #000000 0%, #2c3e50 74%)"
              return themeObj;
            }
          }
  }
  function getIcons(weather,sunset,sunrise){
    const current = Number(String(new Date()).slice(16,18));
    let SunRise = Number(String(new Date(sunrise*1000)).slice(16,18))
    let SunSet = Number(String(new Date(sunset*1000)).slice(16,18))
       if(current>=SunRise && current<SunSet){
             if(weather==="Rain"){   
                  return <img src="https://bmcdn.nl/assets/weather-icons/v1.5/rain.svg" alt=""/>
             }
             else if(weather==="Clouds"){
                 return(<img src="https://bmcdn.nl/assets/weather-icons/v1.5/overcast-day.svg" alt=""/>)
             }
          else{
                 return (<img src="https://bmcdn.nl/assets/weather-icons/v1.5/clear-day.svg" alt=""/>)
             }
      }
      else{    
             if(weather==="Rain"){   
              return(<img src="https://bmcdn.nl/assets/weather-icons/v1.5/rain.svg" alt=""/>);
             }
            else if(weather==="Clouds"){
              return(<img src="https://bmcdn.nl/assets/weather-icons/v1.5/overcast-night.svg" alt=""/>)
            }
            else{
              return <img src="https://bmcdn.nl/assets/weather-icons/v1.5/clear-night.svg" alt=""/> 
          }
        }
  }
function getHourlyIcons(weather,sunrise,sunset,dt){
     let SunRise = Number(String(new Date(sunrise*1000)).slice(16,18))
     let SunSet = Number(String(new Date(sunset*1000)).slice(16,18))
     let current = Number(String(new Date(dt*1000)).slice(16,18));

     if(current>=SunRise && current<SunSet){
           if(weather==="Rain"){   
                return <img src="https://bmcdn.nl/assets/weather-icons/v1.5/rain.svg" alt=""/>
           }
           else if(weather==="Clouds"){
               return(<img src="https://bmcdn.nl/assets/weather-icons/v1.5/overcast-day.svg" alt=""/>)
           }
        else{
               return (<img src="https://bmcdn.nl/assets/weather-icons/v1.5/clear-day.svg" alt=""/>)
           }
    }
    else{    
           if(weather==="Rain"){   
            return(<img src="https://bmcdn.nl/assets/weather-icons/v1.5/rain.svg" alt=""/>);
           }
          else if(weather==="Clouds"){
            return(<img src="https://bmcdn.nl/assets/weather-icons/v1.5/overcast-night.svg" alt=""/>)
          }
          else{
            return <img src="https://bmcdn.nl/assets/weather-icons/v1.5/clear-night.svg" alt=""/> 
        }
      }
  }

export {windConvert,scaleConverter,getTheme,getIcons,getHourlyIcons}