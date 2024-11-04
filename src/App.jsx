function Square({ value }) {
  function handleClick() {
    console.log('clicked!');
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
      <Square value="1" />
      <Square value="2"/>
      <Square value="3"/>
    </div>
    <div>
      <Square value="4"/>
      <Square value="5"/>
      <Square value="6"/>
    </div>
    <div>
      <Square value="7"/>
      <Square value="8"/>
      <Square value="9"/>      
    </div>
    </>
  )
}