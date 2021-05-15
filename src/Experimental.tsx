import React, { useEffect, useRef, useState } from 'react';
import { usePreviousState } from './hooks/usePreviousState';

function Experimental() {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef<number>();
    useEffect(() => {
        prevCountRef.current = count;
    });
    //review: rename usePrevHook to prevCount. 
    const usePrevHook = usePreviousState(count);

    //review: create function onIncrement and onDecrement
    return (
        <div>
            Current: {count}
            <button onClick={() => setCount(curCount => curCount+1)}>+</button>
            <button onClick={() => setCount(curCount => curCount-1)}>-</button>
            PrevRef's Current: {prevCountRef.current}
            Hook's current: {usePrevHook}
        </div>
    );
}

export default Experimental;
