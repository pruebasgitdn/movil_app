//CONTEXTO DEL CART
import React, {createContext, useContext, useReducer, useState} from 'react';

//Crear contexto
export const CartContext = createContext();

//Estado inical del reducr
const initialState = {
  isAuthenticated: false,
  user: {
    id: '',
    usuario: '',
    contraseña: '',
    correo: '',
    direccion: '',
    fechaNacimiento: '',
    departamento: '',
    municipio: '',
    favoritos: [],
    carrito: [],
    compras: [],
  },
};

//Reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload, // Aquí se establece el usuario logueado
        isAuthenticated: true,
      };

    case 'LOGOUT':
      return {
        ...state,
        user: null, // Al cerrar sesión, el usuario vuelve a ser null
        isAuthenticated: false,
      };

    case 'ADD_TO_CART':
      return {
        ...state,
        user: {
          ...state.user,
          carrito: [...(state.user.carrito || []), action.payload],
        },
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        user: {
          ...state.user,
          carrito: state.user.carrito.filter(
            item => item.id !== action.payload,
          ),
        },
      };

    case 'EMPTY_CART':
      return {
        ...state,
        user: {
          ...state.user,
          carrito: [], // Vaciar carro
        },
      };
    case 'ADD_TO_FAVORITES':
      return {
        ...state,
        user: {
          ...state.user,
          favoritos: [...state.user.favoritos, action.payload],
        },
      };
    case 'REMOVE_FROM_FAVORITES':
      return {
        ...state,
        user: {
          ...state.user,
          favoritos: state.user.favoritos.filter(
            item => item.id !== action.payload,
          ),
        },
      };
    case 'EMPTY_FAVOS':
      return {
        ...state,
        user: {
          ...state.user,
          favoritos: [], // Vaciar favos
        },
      };

    default:
      return state;
  }
};
//Proovedor del contexto

export const CartProvider = ({children}) => {
  const [user, setUser] = useState({});
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider
      value={{
        user,
        setUser,
        state,
        dispatch,
      }}>
      {children}
    </CartContext.Provider>
  );
};
