// eslint-disable-next-line
const initialStore = {
    cart: [
        {id: '3', name: 'YAPA', make: 'Another', price: 90.101, description: 'Yet another product A', quantity: 2},
    ],
    storeItems: [
        {id: '1', name: 'Prod A', make: 'The best one', price: 42, description: 'The best product A in the market'},
        {id: '2', name: 'Prod B', make: 'Blue', price: 100},
        {id: '3', name: 'YAPA', make: 'Another', price: 90.101, description: 'Yet another product A'},
        {id: '4', name: 'Prod x', make: 'The unknown one', price: 24, description: ''},
        {id: '5', name: 'Prod y', make: 'Green', price: 10000.42, description: 'Buy me!'},
        {id: '6', name: 'Prod A2', make: 'The second best one', price: 420, description: 'The best product A in the market'},
        {id: '7', name: 'Prod B2', make: 'Yellow', price: 1000},
        {id: '8', name: 'YAPB', make: 'Another B', price: 1.101, description: 'Yet another product A'},
        {id: '9', name: 'Prod xz', make: 'The second unknown', price: 204, description: ''},
    ],
};

const appReducer = (state = initialStore, action) => {
    switch(action.type) {
        case 'ADMIN/DELETE_ITEM':
            const newStoreItems = state.storeItems.filter(item => item.id !== action.itemId);
            console.log(newStoreItems)
            return {
                ...state,
                storeItems: state.storeItems.filter(item => item.id !== action.itemId)
            }
        case 'ADMIN/ADD_ITEM':
            return {
                ...state,
                storeItems: state.storeItems.concat({   
                    ...action.newItem,
                    'id': (state.storeItems.length+1).toString(),
                })
            }
        case 'CART/ADD_ITEM':
            return {
                ...state,
                cart: state.cart.concat(action.newItem)
            }
        default:
            return state;
    }
}

export default appReducer;