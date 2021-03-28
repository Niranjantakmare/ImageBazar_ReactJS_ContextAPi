import React, {useContext, useState, useEffect} from 'react';
import { ImageContext } from '../ImagesContext';
import axios from 'axios';
import { apiKey } from '../api/config';
import Image from './images';
import NoImages from './noImages';
import classes from './imagesContainer.module.css';
import Lightbox from "react-awesome-lightbox";
// You need to import the CSS only once
import "react-awesome-lightbox/build/style.css";
import { downloadImg } from '../common/utils';

const ImagesContainer = (props) => {
    let images = null;
    let bookmarkBtn = null;
    const ImageUrls = [];
    let [galopen, changeGalOpen] = useState(false);
    let [currentIndex, changeCurrentIndex] = useState(0);
    let noImages = null;
    const [state, dispatch] = useContext(ImageContext);

    const onClickImgage = (index) => {
      changeCurrentIndex(index);
      changeGalOpen(true);
    };
    
    const filterBookmark = props.imageLabels.filter(item => item.toLocaleLowerCase() === state.searchText.toLocaleLowerCase());
    if(filterBookmark.length === 0) {
      bookmarkBtn = (<button className={classes.bookmarkBtn} onClick={()=>props.onBookmarkSearch(state.searchText)}>Bookmark Search</button>);
    }

    const runSearch = query => {
        axios
          .get(
            `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=100&format=json&nojsoncallback=1`
          )
          .then(response => {
            dispatch({
                type: 'SEARCH_IMAGES',
                imagesData: response.data.photos.photo
            });
          })
          .catch(error => {
            console.log(
              "Encountered an error with fetching and parsing data",
              error
            );
          });
    };

    useEffect(() => {
        runSearch(state.searchText);
    }, [state.searchText]);

     // map variables to each item in fetched image array and return image component
  if (state.imagesData.length > 0) {
    images = state.imagesData.map((image, index) => {
      let farm = image.farm;
      let server = image.server;
      let id = image.id;
      let secret = image.secret;
      let title = image.title;
      let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
      ImageUrls.push({
        url: url,
        index:index,
        title: title
      })
      return <Image  onImgDownload={()=>downloadImg(url,title)} onImgClick={()=> onClickImgage(index)} url={url} key={id} alt={title} />;
    });
  } else {
    noImages = <NoImages />; // return 'not found' component if no images fetched
  }

    return (
        <div className="ImagesContainer">
            <h2 className={classes.ImagesSerachTitle}>{state.searchText} Pictures</h2>
            <div className={classes.bookmarkSearch}>
              {bookmarkBtn}
            </div>
            <div className={classes.Images}>
              <ul>{images}</ul>
              {noImages}
            </div>
            {galopen?<Lightbox downloadImage={true} startIndex={currentIndex} images={ImageUrls} onClose={e=>changeGalOpen(false)}/>:null}
        </div>
    )
}

export default ImagesContainer;