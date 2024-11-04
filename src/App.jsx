import { useState } from 'react';

function Square() {
  const [value, setValue] = useState("");

  function handleClick() {
    setValue('X');
  }

  return <button
    className="w-24 p-6 border border-indigo-600 rounded-none"
    onClick={handleClick}
    >
      {value}
  </button>
}

export default function Board() {

  return (
    <>
    <div>
      <Square />
      <Square />
      <Square />
    </div>
    <div>
      <Square />
      <Square />
      <Square />
    </div>
    <div>
      <Square />
      <Square />
      <Square />      
    </div>
    </>
  )
}