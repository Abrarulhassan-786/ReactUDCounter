import './App.css';
import React, { useState } from 'react';

function App() {
    const [isNumber, seNumber] = useState(0);
    return (
        <div className='Container'>
            <div className='Wrapper'>
            <div className='addContainer'><button className='addition' onClick={() => seNumber(isNumber + 1)}>Increment</button></div>
                <div className='paragrah'><p>{isNumber}</p></div>
                <div className='subsContainer'><button className='substract' onClick={() => seNumber(isNumber - 1)
                }>Decrement</button></div>
            </div>
        </div>
    );
}

export default App;
