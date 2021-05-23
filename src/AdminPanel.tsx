import React, { useState } from 'react';
import { Product } from './types';

//review: add types for storeItems, addItem, deleteItem
const AdminPanel = ({ storeItems, addItem, deleteItem }) => {
    //review: no need to name variable as name. new keyword is rendundant here. we can keep variable name as `name`, `make`, `price`
    const [name, setName] = useState('');
    const [make, setMake] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    //review: wrap handleNewItem with useCallback
    const handleNewItem = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const newItem = {
            'name': name,
            'make': make,
            'price': (Number.parseFloat(price)) ? Number.parseFloat(price) : 10, //review: why keeping default value as 10?
            'description': description,
            'id': '42',
        };
        addItem(newItem);
    }
    const renderStoreItems = (): JSX.Element[] => {
        //review: if you have a unique identifier in our object always use that as your key. index should be last resort. Use Id as key here
        return storeItems.map((storeItem: Product) => (
            <>
                <li 
                 key={storeItem.id}>
                <span key={'item_' + storeItem.id}>{storeItem.name}</span>
                    <button
                     onClick={() => deleteItem(storeItem.id)}
                     key={'delBtn' + storeItem.id}>
                        Delete
                    </button>
                </li>
            </>
        ))
    }
    
    //review: rename to renderAddItemForm. addItemForm looks like a name for an action. ✅
    //review: we can also take this out as a separate component and wrap with React.memo.
    //review: take out (e) => setName(e.target.value) in a function `onNameChange` and use `useCallback` to avoid creating new function on each render
    //review: keep price input type as number and not text. ✅
    const renderAddItemForm = (): JSX.Element => {
        return (<>
            <form onSubmit={handleNewItem}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="text" placeholder="Make" value={make} onChange={(e) => setMake(e.target.value)} />
                <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                <input type="submit" value="Add"/>
            </form>
        </>)
    }
    return (
        <>
            <h1>Admin Panel</h1>
            <h3>Add new items: </h3>
            {renderAddItemForm()}
            <h3>All items in store: </h3>
            {renderStoreItems()}
        </>
    )
}

export default AdminPanel
