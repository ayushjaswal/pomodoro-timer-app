import React from "react";
import '../index.css';

const TimeFrame = (props)=>{
    return (
        <div className='Main'>
        <p>
        {props.mainTimeMin}:{props.mainTimeSec}
        </p>
        </div>
    )
};

export default TimeFrame;