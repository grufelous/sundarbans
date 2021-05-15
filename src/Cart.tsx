import React from 'react';
import { usePreviousState } from './hooks/usePreviousState';
import { ICartItem } from './types';
//review: rename ICartItem to CartItem


//review: add types
//review: remove inline css
const Cart = ({ cartItems, removeFromCart }) => {
    //review: rename usePreviousState to usePrevious
    const prevCart = usePreviousState(cartItems) || [];
    //review: no need to take out renderCartItems as separate function here. return jsx is very small
    const renderCartItems = (cartItems: Array<ICartItem>): JSX.Element[] => {
        //return cartItems.map((cartItem: ICartItem) => (
        return cartItems.map(cartItem => (
            <div key={'cart'+cartItem.id}>
                <span>
                    <h4>{cartItem.name}</h4>
                    <button onClick={() => removeFromCart(cartItem.id)}>remove</button>
                </span>
                <p>{cartItem.make}</p>
                <p>{cartItem.quantity} x Rs. {cartItem.price}</p>
            </div>
        ))
    }
    console.log('Prev cart: ')
    console.log(prevCart)
    console.log(`cartItems is ${typeof cartItems}, prevCart is ${typeof prevCart}`)
    return (
        <>
            <div
             style={{ display: 'flex', 
                    flexDirection: 'column',
                    flexGrow: 2}}>
                <h3>Cart</h3>
                {renderCartItems(cartItems)}
                <hr/>
                <h4>Previous state: </h4>
                {renderCartItems(prevCart)}
                
            </div>
        </>
    )
}

export default Cart;
