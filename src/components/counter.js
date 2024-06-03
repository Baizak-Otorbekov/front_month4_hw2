import React, { useState } from 'react';

function Counter() {
    const [state, setState] = useState(1);

    function add() {
        if (state < 50) {
            setState(state + 1);
        }
    }

    function remove() {
        if (state > 0){
            setState(state - 1);
        }
    }

    return (
        <div>
            <p>{state}</p>
            <button onClick={add}>+</button>
            <button onClick={remove}>-</button>
        </div>
    );
}

export default Counter;
