import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ImageCard from "../Image/ImageCard";

const MovieListingPage = (props) => {
  const { title } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const imageList =
      props &&
      props.location &&
      props.location.state &&
      props.location.state.pageData;

    setData(imageList || []);
  }, [props]);

  const imageCard = (data) => {
    return data.map((item, index) => {
      return (
        <ImageCard
          key={index}
          imageUrl={item["poster-image"]}
          imageText={item.name}
        />
      );
    });
  };

  return (
    <Fragment>
      <div className="w-full pr-1 pl-1 md:pr-5 md:pl-5">
        <div className="flex text-2xl font-bold mt-4 ml-2 mb-4 text-left text-white">
          <Link to="/">
            {" "}
            <img src={`../images/Back.png`} alt="" className="h-6 mr-2 mt-1" />
          </Link>
          {title}
        </div>
        <div className=" bg-gray-900 grid gap-3 grid-cols-3 mx-auto mr-3 ml-3 md:grid-cols-5 md:gap-8">
          {data && imageCard(data)}
        </div>
      </div>
    </Fragment>
  );
};

export default MovieListingPage;
