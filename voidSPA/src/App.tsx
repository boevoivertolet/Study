import React, {useEffect, useState} from 'react';
import './App.css';

function App() {

    const [value, setValue] = useState<number>(0);


    useEffect(() => {
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }, []);


    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(value))
    }, [value]);


    const incHandler = () => {
        setValue(value + 1)
    }


    return (
        <div className="App">
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>
        </div>
    );
}

export default App;
