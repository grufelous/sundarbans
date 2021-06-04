import React, { useEffect, useState, ReactNode, ErrorInfo } from 'react';

import './styles/ProductItems.css';
interface Props {
    children: ReactNode
}

interface State {
    hasError: boolean
}

class ErrorBoundary extends React.Component<Props, State> {
    state = { hasError: false }
    static getDerivedStateFromError(_: Error) {
        return { hasError: true }
    }
    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }
    render() {
        if(this.state.hasError) {
            return <>
                <p>You tried adding an item too many times!</p>
            </>
        }
        return this.props.children
    }
}

const ExplodingComp = () => {
    throw new Error('Trying to add too many items at once!')
}

const ItemErrorFallback = ({error}) => {
    return (
        <>
            <p>You tried adding too many items at once!</p>
        </>
    )
}

//review: add types
//review: avoid inline css
//review: you can add a com

type AddToCartFn = () => {} // Function

// onCreate: (params: { accountId: string; objective: string; channelType: string }) => void;

const ProductItem = ({ id, name, make, price, description, addToCartFn }) => {
    const [qty, setQty] = useState(1);
    const [explode, setExplode] = useState(false);
    useEffect(() => {
        if(qty === 10)
            setExplode(true)
    }, [qty])
    return (
        <div className="ProductItem">
            <div>
                <h3>{name}</h3>
                <h4>{make} — {price}</h4>
                {description
                ? <p>{description}</p>
                : <p>No description available for {name}</p>}    
            </div>
            <div id="item-state">
                {`Exploding: ${explode}`}
                <ErrorBoundary>
                    <input 
                    type="number"
                    name="qtySelector" 
                    value={qty} 
                    onChange={(e) => setQty(Number.parseInt(e.target.value))}
                    min="1"
                    style={{ width: '4em', textAlign: 'center' }} />
                    <button onClick={() => addToCartFn({
                        id, 'quantity': qty
                    })}>Add {qty} to Cart</button>
                    {explode && <ExplodingComp />}
                </ErrorBoundary>
            </div>
            
        </div>
    )
}

const PropTypes = {
    string(props, propName, componentName) {
        if(typeof props[propName] !== 'string') {
            return new Error(`Hey, the ${componentName} component needs ${propName} to be a string`)
        }
    }
}

ProductItem.propTypes = {
    name: PropTypes.string
}

export default ProductItem
