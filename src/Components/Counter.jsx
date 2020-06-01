import React from 'react';
import Display from './Display';
import ButtonPad from './ButtonPad';


function Counter() {
    return (
        <div className="counter">
            <Display/>
            <ButtonPad/>
        </div>
    )
}

export default Counter;