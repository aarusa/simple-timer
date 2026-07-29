import { useRef } from "react";
const App = () => {

    const inputRef = useRef(null);
    // console.log(inputRef);

    const submit = () => {
        // console.log(inputRef.current);
        // inputRef.current.focus();
        // inputRef.current.blur();
        console.log(inputRef.current.value);
        inputRef.current.style.backgroundColor = "red";
        inputRef.current.style.color = "white";
        inputRef.current.setAttribute('placeholder', 'Enter somethingggg...')
    }

    return ( 
        <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">useRef Example</h2>
            <input 
                className="w-full p-2 border rounded-lg" 
                type="text" 
                placeholder="Type something..."
                ref={inputRef}
                />
            <button onClick={submit} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 transition">
                Submit
            </button>
        </div>
     );
}
 
export default App;