import { useState } from 'react'
import './App.css'
import ProductTab from './ProductTab'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2>Blockbuster deal shop now</h2>
      <ProductTab/>
    </>
  )
}

export default App
