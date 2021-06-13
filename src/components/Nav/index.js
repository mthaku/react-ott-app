import React, { useState } from "react";
import { connect } from "react-redux";

import { setSearchResults } from "../../redux-store/actions/items";
import { debounce } from "../../helper";

const Nav = ({ page1Data, page2Data, page3Data, setSearchResults }) => {
  const [input, setInput] = useState("");

  const onSearch = (inputStr) => {
    setInput(inputStr);
    let data = [];
    if (inputStr.length > 0) {
      data = [...page1Data, ...page2Data, ...page3Data].filter((item) => {
        return item.name.toLowerCase().includes(inputStr.toLowerCase());
      });
      setSearchResults(data);
    }
    else setSearchResults([]);
  };

  return (
    <header className="bg-img">
      <div className="flex flex-col">
        <div className="flex md:justify-end justify-center items-center mr-2 md:mr-7">
          <div className="relative mt-6">
            <input
              type="text"
              className="h-10 w-80 md:w-96 pr-8 pl-5 z-0 focus:shadow focus:outline-none bg-gray-900 bg-opacity-90  text-white"
              placeholder="Search anything..."
              value={input}
              onChange={(e) => debounce(onSearch(e.target.value), 500)}
              onBlur={() => {
                setSearchResults([]);
                setInput("");
              }}
            />
            <div className="absolute top-2 right-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="white"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
{/* 
        {searchResult.length && (
          <div className="flex md:justify-end justify-center items-center mr-2 md:mr-7 z-10 absolute right-0 search-dropdown-top">
            <div className="h-96 w-80 md:w-96 pr-5 pl-5 z-3 focus:shadow focus:outline-none bg-gray-900 bg-opacity-95 shadow-lg text-white height-dropdown ">
              {searchResult &&
                searchResult.map((item, index) => {
                  return (
                    <ImageCard
                      key={index}
                      source="search-listing-page"
                      imageUrl={item["poster-image"]}
                      imageText={item.name}
                    />
                  );
                })}
            </div>
          </div>
        )} */}
      </div>
    </header>
  );
};
const mapStateToProps = ({ items }) => {
  const { page1Data, page2Data, page3Data } = items;
  return {
    page1Data,
    page2Data,
    page3Data
  };
};

export default connect(mapStateToProps, { setSearchResults})(Nav);
