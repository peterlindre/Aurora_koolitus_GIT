import { createContext, useState } from "react";

// Context - globaalse muutuja loomiseks 
// et seda kasutusele v6tta , pean kuskil failis tegema
// const - context =  useContext(CartSumContext)
export const CartSumContext = createContext(); 


export const CartSumContextProvider = ({children}) => {
const [cartSum, setCartSum] = useState(determineCartSum());

function determineCartSum () {
  const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
  let sum = 0;
  cartLS.forEach(product => sum += product.toode.price * product.kogus);
  return sum
}

  return (
   <CartSumContext.Provider value={{cartSum, setCartSum}}>
      {children}
   </CartSumContext.Provider>
  )
}
