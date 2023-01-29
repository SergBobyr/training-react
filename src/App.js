import {useEffect, useState} from "react";

const App=() => {
    const [ship, setShip]=useState([])
    useEffect(()=>{fetch('https://api.spacexdata.com/v3/launches/').then(value => value.json()).then(value=> setShip(value))},[])
  return (
      <div >
          {ship.filter(item=>item.launch_year!=='2020').map( item =>{ return(
              <div key={item.flight_number}>
                  {item.flight_number} - {item.mission_name} - {item.launch_year}
              </div>)})}
    </div>
  );
}

export  {App};
