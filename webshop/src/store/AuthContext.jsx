import { createContext, useState } from "react";

// Context - globaalse muutuja loomiseks 
// et seda kasutusele v6tta , pean kuskil failis tegema
// const - context =  useContext(CartSumContext)
export const AuthContext = createContext(); 


export const AuthContextProvider = ({children}) => {
const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem("token") === "token123");



  return (
   <AuthContext.Provider value={{loggedIn, setLoggedIn}}>
      {children}
   </AuthContext.Provider>
  )
}
