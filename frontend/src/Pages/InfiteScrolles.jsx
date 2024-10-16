import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const InfiteScrolles = () => {
  return (
    <Carousel responsive={responsive}>
      <div className="p-3">
        <div className="w-full h-96 bg-red-800">
          <img />
        </div>
      </div>
      <div className="p-3">
        <div className="w-full h-96 bg-green-800">
          <img />
        </div>
      </div>
      <div className="p-3">
        <div className="w-full h-96 bg-blue-800">
          <img />
        </div>
      </div>
    </Carousel>
  );
};

export default InfiteScrolles;
