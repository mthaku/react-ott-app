import React from "react";
import { Link } from "react-router-dom";

const ScrollableMenu = ({ list, title }) => {
  return (
    <div className=" mr-2 ml-2 md:mr-7 md:ml-7 mb-10">
      <div className="text-xl font-light mt-4 mb-4 text-left text-white">
        <Link
          to={{
            pathname: `/${title}`,
            imageList: list
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

export default ScrollableMenu;
