import React, {useState} from 'react';
import './App.css';

function App() {
    const [value, setValue] = useState(0)
    const incHandler = () => {
        setValue(value + 1)
    }
    const getFromLocalStorageHandler = () => {
     let valueAsString =  localStorage.getItem('counterValue')
        if(valueAsString){
            let newValue =  JSON.parse(valueAsString)
            setValue(newValue)
        }
    }

    const setToLocalStorageHandler = () => {
        localStorage.setItem('counterValue', JSON.stringify(value))
    }
    const clearLocalStorageHandler = () => {
        localStorage.clear()
        setValue(0)
    }
    return (
        <div className="App">
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>
            <button onClick={setToLocalStorageHandler}>setToLocalStorage</button>
            <button onClick={getFromLocalStorageHandler}>getFromLocalStorage</button>
            <button onClick={clearLocalStorageHandler}>clearLocalStorage</button>

        </div>
    );
}

export default App;
