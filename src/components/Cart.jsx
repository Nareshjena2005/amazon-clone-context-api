import React, { useContext } from 'react'
import { CardContext } from '../context/contextapi'

const Cart = () => {
  const { cart } = useContext(CardContext)

  return (
    <div>
      <h1>My Cart</h1>

      {cart.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>${item.price}</p>
          <img src={item.thumbnail} alt={item.title} />
        </div>
      ))}
    </div>
  )
}

export default Cart