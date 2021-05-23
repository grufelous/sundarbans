import React, { useState } from 'react';
import Cart from './Cart';
import { useInput } from './hooks/useInput';
import ProductListing from './ProductListing';
import Search from './Search';
import { CartItem, Product } from './types';

interface StorePropTypes {
    storeItems: Array<Product>,
    cart: Array<CartItem>,
    addToCart: Function,
    removeFromCart: Function,
}

//review: add types for storeItems, cart, addToCart, removeFromCart - ✅
//review: do not write inline css. {{display: 'flex',}}. Use scss file
//review: try to avoid writing variable names as prodList. name it `productList`. long names are not bad. shorter versions may be confusing for next developer who works on this code - ✅
const StoreFront = ({ storeItems, cart, addToCart, removeFromCart }: StorePropTypes) => {
    const {value, onChange} = useInput('');
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <>
            <h1>Store Front</h1>
            <Search term={searchTerm} setTerm={setSearchTerm}></Search>
            <input
             type="text"
             name="search-form"
             value={value}
             onChange={onChange} />
             Search2: {value}
            <p>Searched for {searchTerm}</p>
            <div style={{display: 'flex',}}>
                <ProductListing
                 productList={storeItems}
                 addToCart={addToCart}></ProductListing>
                <Cart
                 productList={storeItems}
                 cartItems={cart}
                 removeFromCart={removeFromCart}></Cart>    
            </div>
            
        </>
    );
}

export default StoreFront;
