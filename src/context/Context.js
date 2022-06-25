import React, { useContext, useReducer } from 'react'
import { createContext } from 'react'
import { cartReducer } from './Reducers'
const Cart = createContext()
function Context({ children }) {
    const products = [{
        id: 1,
        name: "Livon Damage Protect Serum / 100 ML",
        price: 300,
    },
    {
        id: 2,
        name: "Livon super styler serum for straighter hair / 100 ML",
        price: 150,
    },
    {
        id: 3,
        name: "Livon anti frizz serum for rough & dry hair / 100 ML",
        price: 243,
    }]
    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: []
    })
    return (
        // its wrap whole of react app
        <Cart.Provider value={{ state, dispatch }}>
            {children}
        </Cart.Provider>
    )
}

export default Context;

export const CartState = () => {
    return useContext(Cart)
}
