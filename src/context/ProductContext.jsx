import React,{createContext} from "react";
import {products} from '../assets/assets'

export const ProductContext = createContext();

export const ProductProvider = ({children}) => {
    const currency = '₹';
    const value = {
        currency,products
    }
    return (
        <ProductContext.Provider value={{value}}>
            {children}
        </ProductContext.Provider>
    )
}