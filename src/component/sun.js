function Sun(props){
    const{sunrise,sunset} = props;
    let SunRise = String(new Date(sunrise*1000)).slice(16,21)+" am";
    let SunSet = String(new Date(sunset*1000)).slice(16,21)+" pm";
    
    return (<>
     <h4 className="description">SUNRISE & SUNSET</h4>
    <img src="https://bmcdn.nl/assets/weather-icons/v1.5/sunrise.svg"alt=""/>
    <h4>{SunRise}</h4>
    <img src="https://bmcdn.nl/assets/weather-icons/v1.5/sunset.svg" alt=""/>
    <h4>{SunSet}</h4>
    </>)
 }

 export {Sun};