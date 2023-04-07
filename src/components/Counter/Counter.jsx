import React, { useState, useEffect } from 'react'

const Counter = ({ start }) => {
    const [count, setCount] = useState(start);
    const add = () => setCount(count + 1);
    const remove = () => setCount (count-1)
    return (
        <div>
            <span> Counter: {count}</span>
            <button onClick={add}>Add</button>
            <button onClick={remove}>Remove</button>
        </div>
    )
}

export default Counter