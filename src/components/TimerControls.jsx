const TimerControls = ({isRunning, onToggle, onReset}) => {
    return ( 
        <>
            <button onClick={onToggle} className="mt-3 mr-3 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer">
                { isRunning ? 'Pause': 'Start' }
            </button>
            <button onClick={onReset} className="mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 cursor-pointer">
                Reset
            </button>
        </>
     );
}
 
export default TimerControls;