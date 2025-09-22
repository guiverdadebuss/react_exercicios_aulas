import { useState } from "react";

export default function Counter () {
    const [count, setCount] = useState(0);
    const incrementar = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h1>O Valor atual é: {count}</h1>
            <button onClick={incrementar}>Incrementar</button>
        </div>
    );
}