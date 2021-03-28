import React, { useState, useContext, useEffect } from 'react';
import classes from './searchBox.module.css';
import { ImageContext } from '../ImagesContext';

const SearchBox = (props) => {
  
    const [state, dispatch] = useContext(ImageContext);
    let [searchText, setSearchText] = useState(state.searchText);
    
    const onSearchSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'SET_SEARCH_TEXT',
            searchText: searchText
        })
    };

    useEffect(()=> {
        setSearchText(state.searchText);
    }, [state.searchText])

    return (
        <div className={classes.searchInput}>
            <form onSubmit={(e)=> onSearchSubmit(e)} className={classes.searchForm} >
                <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value) } 
                placeholder="Search.." name="search" />
                <button type="submit"><i className="fa fa-search"></i></button>
            </form>
        </div>
    )
}

export default SearchBox;