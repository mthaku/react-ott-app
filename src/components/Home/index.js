import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";

import MovieListingPage from "../MovieListingPage";
import { itemsFetchData } from "../../redux-store/actions/items";

const Home = ({
  page1Data,
  page2Data,
  page3Data,
  title1,
  title2,
  title3,
  searchResults,
  itemsFetchData
}) => {
  const [pageData, setPageData] = useState(page1Data);
  const [title, setTitle] = useState(title1);

  useEffect(() => {
    itemsFetchData("../API/CONTENTLISTINGPAGE-PAGE1.json", "GET", "PAGE1_DATA");
    itemsFetchData("../API/CONTENTLISTINGPAGE-PAGE2.json", "GET", "PAGE2_DATA");
    itemsFetchData("../API/CONTENTLISTINGPAGE-PAGE3.json", "GET", "PAGE3_DATA");
  }, [itemsFetchData]);

  useEffect(() => {
    if (searchResults.length) setPageData(searchResults);
    else {
      setPageData(page1Data);
      setTitle(title1);
    }
  }, [page1Data, title1, searchResults]);

  return (
    <Fragment>
      {/* <ScrollableMenu
        list={imageCard(page1Data)}
        title={title1}
        pageData={page1Data}
      /> */}
      <MovieListingPage title={title} pageData={pageData} pageType="home" />
      {/* <ScrollableMenu
        list={imageCard(page2Data)}
        title={title2}
        pageData={page2Data}
      /> */}
      {/* <ScrollableMenu
        list={imageCard(page3Data)}
        title={title3}
        pageData={page3Data}
      /> */}
      {!searchResults.length && (
        <div className="flex justify-center text-white mr-2 md:mr-7 text-2xl mt-5 ">
          <div
            className="ml-5 w-10 h-10 bg-black	pt-1 text-center rounded cursor-pointer	 "
            onClick={() => {
              setPageData(page1Data);
              setTitle(title1);
            }}
          >
            1
          </div>
          <div
            className="ml-5 w-10 h-10 bg-black pt-1 text-center rounded cursor-pointer	"
            onClick={() => {
              setPageData(page2Data);
              setTitle(title2);
            }}
          >
            2
          </div>
          <div
            className="ml-5 w-10 h-10 bg-black	pt-1 text-center rounded cursor-pointer	"
            onClick={() => {
              setPageData(page3Data);
              setTitle(title3);
            }}
          >
            3
          </div>
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = ({ items }) => {
  const {
    page1Data,
    page2Data,
    page3Data,
    searchResults,
    title1,
    title2,
    title3
  } = items;
  return {
    page1Data,
    page2Data,
    page3Data,
    searchResults,
    title1,
    title2,
    title3
  };
};

export default connect(mapStateToProps, { itemsFetchData })(Home);
