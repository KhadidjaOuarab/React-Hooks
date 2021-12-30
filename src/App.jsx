import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Chat from './Chat'


function App() {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [v1, setv1] = useState("");
  const [v2, setv2] = useState("");
  

  const getValue1 = (e) =>{
    setInputValue1(e.target.value)
  }

  const printValue1 = (e) =>{
    e.preventDefault()
    setv1(inputValue1)
   
  }

  const getValue2 = (e) =>{
    setInputValue2(e.target.value)
  }

  const printValue2 = (e) =>{
    e.preventDefault()
    setv2(inputValue2)
   
  }

 return (
    <div className="AppRow">
      <Chat name='ALI' printValue ={printValue1} getValue= {getValue1}  v={v2} />
      <Chat name='Mohamed' printValue ={printValue2} getValue= {getValue2}  v={v1} />
    </div>
  )
}

export default App
