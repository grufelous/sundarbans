import React from 'react';
import Product from './Product';
import { IProduct } from './types';
//review: lets not follow interface name as IProduct. Let it be Product only

//review: add types.
//review: do not use inline css
const ProductListing = ({ prodList, addToCart }) => {
    //review: no need for seaprate function. write this directly in returned jsx. if you wan't to use fn, then use `useMemo` here.
    const getProdList = (): JSX.Element[] => {
        //review: use prod.id as key
        return prodList.map((prod: IProduct, i: number) => (
            <div key={i}>
                <Product
                key={i}
                id={prod.id}
                name={prod.name}
                make={prod.make}
                price={prod.price}
                description={prod.description}
                addToCartFn={addToCart} />
                {prodList.length === i+1
                 ? null
                 : <hr key={'line' + i} />}
            </div>
        ))
    }
    return (
        <>
            <div
             style={{ display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 3,}}>
                <h2>Viewing {prodList.length} products</h2>
                
                {getProdList()}
            </div>
            
        </>
    )
}

export default ProductListing;
