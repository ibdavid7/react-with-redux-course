import React, {useState, useEffect} from 'react';
import {useCounter} from "../Hooks";

const CounterPage = ({initialCount}) => {

    const {count, increment} = useCounter(initialCount)

    return (
        <div>
            <h1>Count is {count}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    );
};

export default CounterPage;
