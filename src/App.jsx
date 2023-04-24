import React, { useState } from 'react'
import TestComponent from './components/TestComponent';

export default function App() {

  const [number, serNumber] = useState(0);

  const increment = () =>{
    serNumber(number+1);
  }

  return (
    <div className="">
      <TestComponent />
      <button className='btn btn-primary' onClick={increment}>Actualizar +1</button>
      <div className="">
        <h1>CONTADOR: {number}</h1>
      </div>
    </div>
  )
}
