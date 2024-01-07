import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')
  function changeColor(colorch) {
    setColor(colorch);
  }
  return (
    <div className="h-screen w-full bg-red-600" style={{ backgroundColor: color }}>
      <div className="flex fixed bottom-10 inset-x-0 justify-center" >
        <div className='flex justify-center gap-6 flex-wrap bg-white shadow-lg rounded-xl p-3'>
          <button className='m-2 bg-red-500 px-5 py-1 rounded-xl' onClick={()=>{
            changeColor("red")}
          }>Red</button>
          <button className='m-2 bg-yellow-500 px-5 py-1 rounded-xl' onClick={()=>{
            changeColor("yellow")}
          }>Yellow</button>
          <button className='m-2 bg-green-500 px-5 py-1 rounded-xl' onClick={()=>{
            changeColor("green")}
          }>Green</button>
          <button className='m-2 bg-violet-500 px-5 py-1 rounded-xl' onClick={()=>{
            changeColor("violet")}
          }>Violet</button>
          <button className='m-2 bg-blue-500 px-5 py-1 rounded-xl' onClick={()=>{
            changeColor("blue")}
          }>Blue</button>
        </div>
      </div>
    </div>
  )
}

export default App
