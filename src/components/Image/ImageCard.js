import React, { useState, useEffect, useRef } from "react";
import { registerObserver } from "../../helper/IntersectionObserver";

const ImageCard = ({ imageUrl, imageText }) => {
  const [showImage, setShowImage] = useState(false);
  const placeHolderRef = useRef(null);
  const missingPosterUrl = "placeholder_for_missing_posters.png";

  // Component Did Mount.
  useEffect(() => {
    // To register the observer
    placeHolderRef.current &&
      registerObserver(placeHolderRef.current, setShowImage);
  }, []);

  return (
    // <div className="bg-auto mb-8">
    <div className="overflow-hidden">
      {showImage ? (
        <img
          src={`../images/${imageUrl || missingPosterUrl}`}
          alt={imageText}
          onError={(e) => e.target.src = `../images/${missingPosterUrl}`}
          className="w-full"
        />
      ) : (
        <img
          ref={placeHolderRef}
          src={`../images/${missingPosterUrl}`}
          alt={imageText}
          className="w-full"
        />
      )}
      <div className="text-md opacity-75 font-light mt-2 text-left text-white">
        {imageText}
      </div>
    </div>
  );
};

export default ImageCard;
