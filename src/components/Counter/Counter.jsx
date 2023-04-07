import React, { useState } from 'react'

const Counter = ({ start }) => {
    const [count, setCount] = useState(start);
    const add = () => setCount(count + 1);
    const remove = () => setCount(count - 1)
    return (
        <div>
            <span> Counter: {count}</span>
            <div>
                <button onClick={add}>Add</button>
                <button onClick={remove}>Remove</button>
            </div>
        </div>
    )
}

export default Counter