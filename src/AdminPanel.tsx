import React, { useState } from 'react';
import { IProduct } from './types';

//review: add types for storeItems, addItem, deleteItem
const AdminPanel = ({ storeItems, addItem, deleteItem }) => {
    //review: no need to name variable as newName. new keyword is rendundant here. we can keep variable name as `name`, `make`, `price`
    const [newName, setNewName] = useState('');
    const [newMake, setNewMake] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [newDescription, setNewDescription] = useState('');
    //review: wrap handleNewItem with useCallback
    const handleNewItem = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const newItem = {
            'name': newName,
            'make': newMake,
            'price': (Number.parseFloat(newPrice)) ? Number.parseFloat(newPrice) : 10, //review: why keeping default value as 10?
            'description': newDescription,
            'id': '42',
        };
        addItem(newItem);
    }
    const renderStoreItems = (): JSX.Element[] => {
        console.log(`Type: ${typeof storeItems}`)
        console.log(storeItems)
        //review: if you have a unique identifier in our object always use that as your key. index should be last resort. Use Id as key here
        return storeItems.map((storeItem: IProduct, i: number) => (
            <>
                <li 
                 key={i}>
                {storeItem.name}
                    <button
                     onClick={() => deleteItem(storeItem.id)}
                     key={'delBtn' + i}>
                        Delete
                    </button>
                </li>
            </>
        ))
    }
    
    //review: rename to renderAddItemForm. addItemForm looks like a name for an action.
    //review: we can also take this out as a separate component and wrap with React.memo.
    //review: take out (e) => setNewName(e.target.value) in a function `onNameChange` and use `useCallback` to avoid creating new function on each render
    //review: keep price input type as number and not text.
    const addItemForm = (): JSX.Element => {
        return (<>
            <form onSubmit={handleNewItem}>
                <input type="text" placeholder="Name" value={newName} onChange={(e) => setNewName(e.target.value)}/>
                <input type="text" placeholder="Make" value={newMake} onChange={(e) => setNewMake(e.target.value)} />
                <input type="text" placeholder="Price" value={newPrice} onChange={(e) => setNewPrice(e.target.value)} />
                <input type="text" placeholder="Description" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} />
                <input type="submit" value="Add"/>
            </form>
        </>)
    }
    return (
        <>
            <h1>Admin Panel</h1>
            <h3>Add new items: </h3>
            {addItemForm()}
            <h3>All items in store: </h3>
            {renderStoreItems()}
        </>
    )
}

export default AdminPanel
