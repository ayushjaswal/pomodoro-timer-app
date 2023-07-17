import React from "react";
import '../index.css';

const Cycle = (props) =>{

    return (
        <div className="cycle">
            <p>
            Cycle: {props.value}
            </p>
        </div>
    )
};

export default Cycle;