
import React from 'react'
import { useState } from 'react';
import "./App.css"


export default function App() {
  const [count, setCount] = useState(0);

  if (count > 100) {
    setCount(0)
  } else if (count < 0) {
    setCount(0)
  }

  return (
    <div className='box'>
      <p> {count}</p>
      <button className='btn btn-success me-2' onClick={() => setCount(count + 1)}>
        increment
      </button>
      <button className='btn btn-danger' onClick={() => setCount(0)}>
        reset
      </button>
    </div>
  )
}