import React from 'react';
import ProductItem from './ProductItem';
import { Product } from './types';
//review: lets not follow interface name as Product. Let it be ProductItem only ✅

interface ProductListingPropTypes {
    productList: Array<Product>,
    addToCart: Function,
}

//review: add types - ✅
//review: do not use inline css
const ProductListing = ({ productList, addToCart }: ProductListingPropTypes) => {
    //review: no need for seaprate function. write this directly in returned jsx. if you wan't to use fn, then use `useMemo` here.
    const getProdList = (): JSX.Element[] => {
        //review: use prod.id as key - ✅
        return productList.map((prod: Product, i: number) => (
            <div key={prod.id}>
                <ProductItem
                 key={prod.id}
                 id={prod.id}
                 name={prod.name}
                 make={prod.make}
                 price={prod.price}
                 description={prod.description}
                 addToCartFn={addToCart} />
                {productList.length === i+1
                 ? null
                 : <hr key={'line' + prod.id} />}
            </div>
        ))
    }
    return (
        <>
            <div
             style={{ display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 3,}}>
                <h2>Viewing {productList.length} products</h2>
                
                {getProdList()}
            </div>
            
        </>
    )
}

export default ProductListing;
