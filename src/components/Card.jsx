import React, { useContext } from 'react'
import { CardContext } from '../context/contextapi'

const Card = ({product}) => {
   const {addToCard}   = useContext(CardContext)
return (
  <div>
 <button onClick={() => {
  console.log(product)
  addToCard(product)
}}>
  Add to Cart
</button>
  </div>
)
}

export default Card
