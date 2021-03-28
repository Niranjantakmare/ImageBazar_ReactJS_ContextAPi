import React, { useReducer, createContext } from 'react';

export const ImageContext = createContext();

const intialImagesData = {
    searchText: 'Foods',
    imagesData: []
}


const imageReducer = (state, action) => {
    switch(action.type) {
        case 'SET_SEARCH_TEXT':
            return {
                ...state,
                searchText: action.searchText
            };
        case 'SEARCH_IMAGES':
            return {
                ...state,
                imagesData: action.imagesData
            };
        default: 
            return state;
    }
}

export const ImageContextProvider  = (props) => {
    const [state, dispatch] = useReducer(imageReducer, intialImagesData);
    return (
        <ImageContext.Provider value={[state, dispatch]}>
        {props.children}
        </ImageContext.Provider>
    )
} 

;