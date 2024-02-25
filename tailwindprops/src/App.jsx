import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './component/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 p-4 rounded-xl mb-4 text-black'>TailwindCss</h1>
      <Card userName="Krunal" btnText="Know more" />
    </>
  )
}

export default App
