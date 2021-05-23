import React from 'react'

//review: add type for term as well - ✅
//review: take out onChange function and wrap it with useCallback
const Search = (props: {term: string, setTerm: Function}) => {
    return (
        <>
            <input 
             type="text"
             placeholder="Search products..."
             onChange={(e) => props.setTerm(e.target.value)}
             value={props.term}
            ></input>
        </>
    )
}

export default Search;
