import React from 'react';
import { usePreviousState } from './hooks/usePreviousState';
import { CartItem, Product } from './types';
//review: rename ICartItem to CartItem - ✅


//review: add types
//review: remove inline css
const Cart = ({ productList, cartItems, removeFromCart }) => {
    const getProdFromId = (id: string) => {
        const filterResult = productList.filter((product: Product) => (product.id === id))
        return filterResult.length===1 ? filterResult[0] : {'id': 'undefined'}
    }
    //review: rename usePreviousState to usePrevious
    const prevCart = usePreviousState(cartItems) || [];
    //review: no need to take out renderCartItems as separate function here. return jsx is very small
    const renderCartItems = (cartItems: Array<CartItem>): JSX.Element[] => {
        return cartItems.map((cartItem) => {
            const prod = getProdFromId(cartItem.id)
            return (
            <div key={'cart'+cartItem.id}>
                <span>
                    <h4>{prod.name}</h4>
                    <button onClick={() => removeFromCart(cartItem.id)}>remove</button>
                </span>
                <p>{prod.make}</p>
                <p>{cartItem.quantity} x Rs. {prod.price}</p>
            </div>)
        })
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
                <hr />
                <h4>Previous state: </h4>
                {renderCartItems(prevCart)}
            </div>
        </>
    )
}

export default Cart;
