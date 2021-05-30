import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";

import ImageCard from "../Image/ImageCard";
import ScrollableMenu from "../ScrollableMenu";
import { itemsFetchData } from "../../redux-store/actions/items";

const Home = ({
  page1Data,
  page2Data,
  page3Data,
  title1,
  title2,
  title3,
  itemsFetchData
}) => {
  useEffect(() => {
    itemsFetchData("../API/CONTENTLISTINGPAGE-PAGE1.json", "GET", "PAGE1_DATA");
    itemsFetchData("../API/CONTENTLISTINGPAGE-PAGE2.json", "GET", "PAGE2_DATA");
    itemsFetchData("../API/CONTENTLISTINGPAGE-PAGE3.json", "GET", "PAGE3_DATA");
  }, [itemsFetchData]);

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
      <ScrollableMenu
        list={imageCard(page1Data)}
        title={title1}
        pageData={page1Data}
      />
      <ScrollableMenu
        list={imageCard(page2Data)}
        title={title2}
        pageData={page2Data}
      />
      <ScrollableMenu
        list={imageCard(page3Data)}
        title={title3}
        pageData={page3Data}
      />
    </Fragment>
  );
};

const mapStateToProps = ({ items }) => {
  const { page1Data, page2Data, page3Data, title1, title2, title3 } = items;
  return {
    page1Data,
    page2Data,
    page3Data,
    title1,
    title2,
    title3
  };
};

export default connect(mapStateToProps, { itemsFetchData })(Home);
