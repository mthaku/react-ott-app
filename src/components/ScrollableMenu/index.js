import React from "react";
import { Link } from "react-router-dom";

const ScrollableMenu = ({ list, title, pageData }) => {

  return (
    <div className=" mr-2 ml-2 md:mr-7 md:ml-7 mb-10">
      <div className="text-2xl font-bold mt-4 mb-4 text-left text-white">
        <Link
          to={{
            pathname: `/${title}`,
            state: { pageData }
          }}
        >
          {title}
        </Link>
      </div>
      <div className="horizontal-scroll grid gap-3 mx-auto  md:gap-8 ">
        {list}
      </div>
    </div>
  );
};
const moviePropsAreEqual = (prevMovie, nextMovie) => {
  return JSON.parse(JSON.stringify(prevMovie.pageData)) === JSON.parse(JSON.stringify(nextMovie.pageData));
}

const MemoizedScrollableMenu = React.memo(ScrollableMenu, moviePropsAreEqual);

export default MemoizedScrollableMenu;
