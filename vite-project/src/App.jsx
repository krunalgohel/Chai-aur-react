import { useState } from 'react'

import Chai from './chai'

function App() {

  return (
    <>
      <div style={{padding:"0px 30%"}}>
        <h1>Chai aur react | Krunal Gohel</h1>
        <hr></hr>
        <h4>Notes:</h4>
        <p><strong>1.</strong> for create basic react app type "<b style={{color:"green"}}>npx create-react-app appname</b>"</p>
        <p><strong>2.</strong> to run this project "<b style={{color:"green"}}>npm run start</b>"</p>
        <p><strong>3.</strong> to build this project "<b style={{color:"green"}}>npm run build</b>"</p>
        <hr></hr>
        <p><strong>1.</strong> to create project with <span style={{color:"red",fontWeight:600}}>vite</span> type "<b style={{color:"red"}}>npm create vite@latest</b>"</p>
        <p><strong>2.</strong> to run vite project type this "<b style={{color:"red"}}>npm run dev</b>"</p>
      </div>

      <Chai/>
    </>
  )
}

export default App
