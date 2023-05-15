import { useState } from "react";
import classes from './Counter.module.scss';

export const Counter = () => {
    
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }
    return (
    <div>
        <h2>{count}</h2>
        <button onClick={increment} className={classes.btn}>Increment</button>
    </div>
    );
}