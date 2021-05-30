import React, { Fragment } from "react";
import useFetch from "../CustomHooks/useFetch";

import ImageCard from "../Image/ImageCard";
import ScrollableMenu from "../ScrollableMenu";

const Home = () => {

  const { data: page1, title: title1 } = useFetch({
    url: "../API/CONTENTLISTINGPAGE-PAGE1.json",
    method: "GET"
  });

  const { data: page2, title: title2 } = useFetch({
    url: "../API/CONTENTLISTINGPAGE-PAGE2.json",
    method: "GET"
  });

  const { data: page3, title: title3 } = useFetch({
    url: "../API/CONTENTLISTINGPAGE-PAGE3.json",
    method: "GET"
  });

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
      {/* <div className="w-full pr-1 pl-1 md:pr-5 md:pl-5">
        <div className=" bg-gray-900 grid gap-3 grid-cols-3 mx-auto mr-3 ml-3 md:grid-cols-5 md:gap-8">
          {imageCard()}
        </div>
      </div> */}
      <ScrollableMenu list={imageCard(page1)} title={title1} />
      <ScrollableMenu list={imageCard(page2)} title={title2} />
      <ScrollableMenu list={imageCard(page3)} title={title3} />

      {/* <div className="horizontal-scroll grid gap-3  mx-auto pr-4 pl-4 md:gap-8 pr-1 pl-1 md:pr-6 md:pl-6 mt-4">{imageCard()}</div> */}
    </Fragment>
  );
};

export default Home;
