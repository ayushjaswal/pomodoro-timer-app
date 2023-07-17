import React from "react";
import '../index.css';

const Button = (props)=>{

    return (
        <button onClick={props.caseClick}>{props.buttonValue}</button>
    )
}
export default Button;