import { useState } from 'react'
import Header from "./components/Header"
import PaginatedItems from './components/PaginatedItems'
import { db } from './data/db'

function App() {


  const [data] = useState(db)
  const [cart, setCart] = useState(0)


  const addToCart = (val : number) => {
    setCart(cart + 1)

    console.log("cart: " + cart)
    console.log("val: " + val)
  }

  return (
    <>
      <Header/>
      <PaginatedItems itemsPerPage={15} data={data} addToCart={addToCart}/>
    </>
  )
}

export default App
