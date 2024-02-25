import { useState } from 'react'

function App() {

  const [bgColor, setColor] = useState("olive");

  return (
    <div className="w-screen h-screen" style={{backgroundColor: bgColor}}>
      <div className="flex fixed flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justofy-center gap-3 shadow-xl bg-white px-3 py-2 rounded-full text-blue">
          
          <button className='ountline-none text-white shadow-lg rounded-full bg-red-500'
          onClick={()=> setColor("red")}>Red</button>
          <button className='ountline-none text-white shadow-lg rounded-full bg-green-500'
          onClick={()=> setColor("green")}>Green</button>
          <button className='ountline-none text-white shadow-lg rounded-full bg-blue-500'
          onClick={()=> setColor("blue")}>Blue</button>
          <button className='ountline-none text-white shadow-lg rounded-full bg-olive'
          onClick={()=> setColor("olive")}>Olive</button>
          <button className='ountline-none text-white shadow-lg rounded-full bg-gray-500'
          onClick={()=> setColor("Gray")}>Gray</button>
          <button className='ountline-none text-black shadow-lg rounded-full bg-yellow-500'
          onClick={()=> setColor("yellow")}>Yellow</button>
          <button className='ountline-none text-black shadow-lg rounded-full bg-pink-500'
          onClick={()=> setColor("pink")}>Pink</button>
          <button className='ountline-none text-white shadow-lg rounded-full bg-purple-500'
          onClick={()=> setColor("purple")}>Purple</button>
          <button className='ountline-none text-black shadow-lg rounded-full bg-orange-500'
          onClick={()=> setColor("lavender")}>Orange</button>
          <button className='ountline-none text-black shadow-lg rounded-full bg-white'
          onClick={()=> setColor("white")}>White</button>
          <button className='ountline-none text-white shadow-lg rounded-full bg-black-500'
          onClick={()=> setColor("black")}>Black</button>
        </div>
      </div>
    </div>
  )
}

export default App
