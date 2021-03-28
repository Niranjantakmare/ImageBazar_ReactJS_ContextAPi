import React, { useContext } from 'react';
import ImageLabel from './imageLabel';
import classes from './searchBox.module.css';
import { ImageContext } from '../ImagesContext';

const ImageSearchLabels = (props) => {
    let imageLabelJSX= null;
    const [state, dispatch] = useContext(ImageContext);

    if(props.imageLabels && props.imageLabels.length > 0) {
        imageLabelJSX = props.imageLabels.map(value =>(<ImageLabel  
            isActive={state.searchText.toLocaleLowerCase() === value.toLocaleLowerCase() ? true : false}
        onClicked= {()=> dispatch({
            type: 'SET_SEARCH_TEXT',
            searchText: value
        })} label={value}></ImageLabel>))
    }
    return (
        <div className={classes.imageSearchLebels}>
            {imageLabelJSX}
        </div>
    )
}

export default ImageSearchLabels;