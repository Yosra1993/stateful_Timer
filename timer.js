
import React from 'react';
import './timer.css';
const Convert=(ms) =>
{
    const hours   = Math.floor(((ms/1000)/60)/60);
    const minutes = Math.floor(((ms/1000)/60)%60);
    const seconds = Math.floor((ms/1000)%60);
  
  return (hours.toString().padStart(2, "0")+':'+ minutes.toString().padStart(2, "0") +':'+ seconds.toString().padStart(2, "0"))
}
const Time=({ms}) =>
{
  return (  <div className="time">
    
                <h3>{Convert(ms)}</h3>
    
                <div className='container'>
                      <p className="hour">Hour</p>
                      <p className="seconde">Seconde</p>
                      <p className="minute"> Minute </p>
                </div>
            </div>
  )
}


export default Time ;