function Square() {
  return <button class="w-24 p-6 border border-indigo-600 rounded-none">1</button>
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