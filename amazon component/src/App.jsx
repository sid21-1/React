import { useState } from 'react'
import './App.css'
import ProductTab from './ProductTab'
import LikeButton from './LikeButton'
import TodoList from './components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TodoList/>
    {/* <h2>States in React</h2> */}
      {/* <ProductTab/> */}
      {/* <LikeButton/> */}
    </>
  )
}

export default App
