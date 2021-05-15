export interface IProduct {
    id: string,
    name: string,
    make: string,
    price: number,
    description?: string
}

//review: CartItem can only have reference to product id and quantity and we can read all other prodct details by finding the product from products array. this will avoid double source of truth
export interface ICartItem {
    id: string,
    name: string,
    make: string,
    price: number,
    description?: string,
    quantity: number
}
