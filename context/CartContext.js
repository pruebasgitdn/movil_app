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
        isAuthenticated: true,
        user: {
          id: action.payload.id,
          usuario: action.payload.usuario,
          contraseña: action.payload.contraseña,
          correo: action.payload.correo,
          direccion: action.payload.direccion,
          fechaNacimiento: action.payload.fechaNacimiento,
          departamento: action.payload.departamento,
          municipio: action.payload.municipio,
          favoritos: action.payload.favoritos || [],
          carrito: action.payload.carrito || [],
          compras: action.payload.compras || [],
        },
      };

    case 'LOGOUT':
      return {
        ...state,
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

    case 'ADD_TO_CART':
      return {
        ...state,
        user: {
          ...state.user,
          carrito: state.user.carrito.some(
            item => item.id === action.payload.id,
          )
            ? state.user.carrito
            : [...(state.user.carrito || []), action.payload],
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
          favoritos: state.user.favoritos.some(
            item => item.id === action.payload.id,
          )
            ? state.user.favoritos
            : [...(state.user.favoritos || []), action.payload],
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

    case 'EDIT_PROFILE':
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload, // Solo actualiza los campos modificados
        },
      };

    case 'UPDATE_CART_ITEM':
      return {
        ...state,
        user: {
          ...state.user,
          carrito: state.user.carrito.map(item =>
            item.id === action.payload.id
              ? {...item, quantity: action.payload.quantity} // Actualiza la cantidad
              : item,
          ),
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
