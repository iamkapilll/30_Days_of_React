// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

const Numbers = ({numbers}) =>{
    const list = numbers.map((number) => <li>{number}</li>)
    return list
}


function App() {

  const numbers = [1,2,3,4,5,6]


  return (
    <>
    <h1>Numbers:</h1>
    <ul>
      <Numbers numbers={numbers} />
    </ul>
     
    </>
  )
}

export default App
