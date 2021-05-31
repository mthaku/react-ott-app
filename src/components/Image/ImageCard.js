import React, { useState, useEffect, useRef } from "react";
import { registerObserver } from "../../helper";

const ImageCard = ({ imageUrl, imageText, source }) => {
  const [showImage, setShowImage] = useState(false);
  const placeHolderRef = useRef(null);
  const missingPosterUrl = "placeholder_for_missing_posters.png";
  const imageHeight =
    source === "search-listing-page" ? "image-dimensions " : "";
  const divStyle =
    source === "search-listing-page" ? "search-list" : "flex-col";
  const textStyle = source === "search-listing-page" ? "search-text" : "";

  // Component Did Mount.
  useEffect(() => {
    // To register the observer
    placeHolderRef.current &&
      registerObserver(placeHolderRef.current, setShowImage);
  }, []);

  return (
    <div className={`overflow-hidden image-card flex ${divStyle}`}>
      {showImage ? (
        <img
          src={`../images/${imageUrl || missingPosterUrl}`}
          loading="lazy"
          alt={imageText}
          onError={(e) => (e.target.src = `../images/${missingPosterUrl}`)}
          className={`w-full ${imageHeight}`}
        />
      ) : (
        <div ref={placeHolderRef} className={`w-full h-40 ${imageHeight}`} />
      )}
      <div
        title={imageText}
        className={`text-md opacity-75 font-light mt-2 text-left text-white overflow-hidden whitespace-nowrap	overflow-ellipsis	${textStyle}`}
      >
        {imageText}
      </div>
    </div>
  );
};

export default ImageCard;
