import { useState, useRef } from "react";
import Timer from "./components/Timer";

const App = () => {
    
    const timerRef = useRef(null);

    const [time, setTime] = useState(0);

    const [isRunning, setIsRunning] = useState(false);

    const toggleTimer = () => {

        if(isRunning){
            // to pause the timer
            clearInterval(timerRef.current);
            timerRef.current = null;
        }else{
            // start the timer
            timerRef.current = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        }

        setIsRunning(!isRunning);

    }

    const resetTimer = () => {
            clearInterval(timerRef.current);
            setIsRunning(false);
            setTime(0);
            timerRef.current = null;
        }

    return ( 
        <Timer time={time} isRunning={isRunning} toggleTimer={toggleTimer} resetTimer={resetTimer} />
     );
}
 
export default App;