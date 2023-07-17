import React, { useState, useEffect, useSound } from 'react';
import Cycle from './Components/Cycle';
import Button from './Components/Button';
import TimeFrame from './Components/TimeFrame';
import Title from './Components/Title';
// import bellSound from './pomodoro-timer-app\src\Bell.mp3';
import './index.css';

const Time = () => {
    // const playBellSound = useSound(bellSound);
    const audioElm = document.getElementById("bell");
    const [buttonValue, toggleButtonValue] = useState("START");
    const [cycle, updateCycle] = useState(0);
    const [timeMin, changetimeMin] = useState(0);
    const [timeSec, changetimeSec] = useState(0);
    const [mainTimeSec, changemainTimeSec] = useState("00");
    const [mainTimeMin, changemainTimeMin] = useState("00");
    const [running, togggleRunning] = useState(false);

    const tick = () => {
        if (timeMin === 25 && timeSec === 0) {
            changemainTimeSec("0" + timeSec.toString());
            changemainTimeMin(timeMin.toString());
            toggleButtonValue("START");
            updateCycle(cycle + 1);
            togggleRunning(false);
        }
        else if (timeSec + 1 < 60) {
            changetimeSec(prevTimeSec => prevTimeSec + 1);
            changemainTimeSec(timeSec.toString().padStart(2, '0'));
        }
        else if (timeSec + 1 == 60) {
            changetimeMin(prevTimeMin => prevTimeMin + 1);
            changetimeSec(0);
            changemainTimeSec("00");
            changemainTimeMin(timeMin.toString().padStart(2, '0'));
            changemainTimeSec(timeSec.toString().padStart(2, '0'));
        }
    }

    useEffect(() => {
        let interval;
        if (buttonValue === "PAUSE") {
            interval = setInterval(tick, 1000);
        }
        else {
            console.log("Stopped");
        }
        return (() => {
            clearInterval(interval);
        })
    }, [buttonValue, timeSec]);

    const handleStart = () => {
        if (cycle > 0 && buttonValue === "START" && running === false) {
            changetimeMin(0);
            changetimeSec(0);
            changemainTimeMin("00");
            changemainTimeSec("00");
        }
        if (buttonValue === "PAUSE") {
            toggleButtonValue("RESUME");
        }
        else {
            toggleButtonValue("PAUSE");
            togggleRunning(true);
        }
    }
    return (
        <div>

            <div className='Top'>
                <Title />
                <div className='Frame'>
                    <Cycle value={cycle} />
                    <TimeFrame mainTimeMin={mainTimeMin} mainTimeSec={mainTimeSec} />
                    <Button caseClick={handleStart} buttonValue={buttonValue} />
                </div>
            </div>
            <div className='footer'>
                <p>
                    Made with ❣️ by @yujas
                </p>
            </div>
        </div>
    )
}

export default Time;