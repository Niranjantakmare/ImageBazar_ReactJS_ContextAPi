import React from 'react';
import classes from './searchBox.module.css';
const ImageLabel = (props) => {
    let btnClasses = [classes.imageLabel];
    if(props.isActive) {
        btnClasses.push(classes.imageLabelactive);
    }
    return (
    <div onClick={props.onClicked} className={btnClasses.join(" ")}>{props.label}</div>
    )
}

export default ImageLabel;