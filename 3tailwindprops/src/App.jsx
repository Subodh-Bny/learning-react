import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1 className='text-3xl bg-green-500 p-3 rounded-lg'>Learning vite and tailwind</h1>
      <div className="main flex justify-center p-9 m-9 h-8 bg-red-500 items-center text-3xl rounded-3xl">Hello</div>
      <Card username = 'bunny' email='bunny@gmail.com'/>
      <Card />
      <Card />
    </>
  )
}

export default App
