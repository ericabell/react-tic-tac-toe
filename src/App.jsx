import { useState } from 'react';

function Square({ value }) {
  return <button
    className="w-24 p-6 border border-indigo-600 rounded-none"
    >
      {value}
  </button>
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  return (
    <>
    <div>
      <Square value={squares[0]}/>
      <Square value={squares[1]}/>
      <Square value={squares[2]}/>
    </div>
    <div>
      <Square value={squares[3]}/>
      <Square value={squares[4]}/>
      <Square value={squares[5]}/>
    </div>
    <div>
      <Square value={squares[6]}/>
      <Square value={squares[7]}/>
      <Square value={squares[8]}/>      
    </div>
    </>
  )
}