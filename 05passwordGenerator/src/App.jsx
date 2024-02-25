import { useCallback, useEffect, useState, useRef } from 'react'

function App() {

  const [length, setLength] = useState(9);

  const [numberAllowed, setNumberAllowed] = useState(false);

  const [charAllowed, setCharAllowed] = useState(false);

  const [password, setPassword] = useState("");

  const [copyText, setCopyText] = useState("Copy");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str += "1234567890";

    if(charAllowed) str += "!@#$%^&()~`{}[]+-*";

    for(let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);
    setCopyText("Copy");

  }, [length, numberAllowed, charAllowed, setPassword])
  
  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    setCopyText("Copied!");
  }, [password])

  useEffect(()=> {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <h1 className='text-white text-4xl text-center mt-8 font-bold mb-8'>Password Generator</h1>
      <div className='w-full max-w-md mx-auto shadow-lg rounded-lg text-orange-500 bg-gray-700 p-4'>
        <div className='flex rounded-lg overflow-hidden rounded-lg mb-4 p-3'>
          <input 
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button 
            className='outline-none  bg-blue-700 text-white px-3 py-0.5 shrink-0'
            onClick={copyPasswordToClipboard}  
          >{copyText}</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex item-center gap-x-1'>
            <input 
              type="range"  
              min={9}
              max={100}
              value={length}
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox" 
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={()=> {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox" 
              defaultChecked={charAllowed}
              id="charcterInput"
              onChange={()=> {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charcterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
