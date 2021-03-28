import React from "react";
import classes from "./imagesContainer.module.css";

const Image = ({ url, title, onImgClick, onImgDownload }) => (
  <li>
    <img src={url} alt={title}  onClick={onImgClick}  />
    <i onClick={onImgDownload} className={"fa fa-download "+ classes.downloadIcon} aria-hidden="true"></i>
    <i onClick={onImgClick} class={"fa fa-eye "+ classes.viewIcon} aria-hidden="true"></i>
  </li>
);

export default Image;
