import { createContext, useState } from "react";

 export const CardContext = createContext()

export const CardProvider = ({children}) =>{
  const [cart, setCart] = useState([]);
  const addToCard = (product)=>{
    setCart((prev)=>{
     return [...prev,product]
    })

  }
  return (
    <CardContext.Provider value={{cart, addToCard}}>
       {children}
  </CardContext.Provider>
  )
}