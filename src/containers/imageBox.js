import React, { useState } from 'react';
import SearchBox from '../components/searchBox';
import classes from './imageBox.module.css';
import ImageSearchLabels from '../components/imageSearchLabels';
import  { ImageContextProvider  } from '../ImagesContext';
import ImagesContainer from '../components/imagesContainer';


const ImageBox = () => {
    
    const [imageLabels, setImageLabels] = useState(["Foods", "Indian Family", "Roads", "Hills","Animals"]);
    
    const onBookmarkSearch = (text) => {
        const filterText = imageLabels.filter(item => item.toLocaleLowerCase() === text.toLocaleLowerCase());

        if(filterText && filterText.length < 1) {
            setImageLabels([...imageLabels, text]);
        }
    }
    

    return (
        <div className="container">
            <h2 className={classes.appTitle}>Image Bazar</h2> 
            <ImageContextProvider>
                <SearchBox></SearchBox>
                <ImageSearchLabels imageLabels={imageLabels}></ImageSearchLabels>
                <hr className={classes.hrLine}/>
                <ImagesContainer imageLabels={imageLabels} onBookmarkSearch={(text)=>onBookmarkSearch(text)}></ImagesContainer>
            </ImageContextProvider> 
        </div>
    )

}

export default ImageBox;