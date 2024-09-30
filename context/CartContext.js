//CONTEXTO DEL CART
import React, {createContext, useContext, useReducer, useState} from 'react';

//Crear contexto
export const CartContext = createContext();

//Estado inical del reducr

//Reducer

//Proovedor del contexto

export const CartProvider = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  return (
    <CartContext.Provider
      value={{isAuthenticated, setIsAuthenticated, user, setUser}}>
      {children}
    </CartContext.Provider>
  );
};
