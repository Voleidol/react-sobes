import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => { 
        setCount(count - 1)
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => increment()}>Increment</button>
            <button disabled={!count} onClick={() => decrement()}>Decrement</button>
        </div>
    )
}

export default Counter