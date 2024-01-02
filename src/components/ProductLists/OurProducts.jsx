import React, { useRef, useState } from "react";
import "../../App.css";
import Products from "./Products";

import { AllProducts } from "../JsonFiles/AllProducts";

const OurProducts = () => {
  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);
  const [buttonStyle, setButtonStyle] = useState("");

  const [scrollPosition1, setScrollPosition1] = useState(0);
  const [scrollPosition2, setScrollPosition2] = useState(0);
  const [style, setStyle] = useState("");
  const scrollLeft = () => {
    if (containerRef1.current && containerRef2.current) {
      setScrollPosition1((prevPosition) => prevPosition - 550);
      setScrollPosition2((prevPosition) => prevPosition - 550);
      containerRef1.current.scrollLeft -= 550;
      containerRef2.current.scrollLeft -= 550;
    }
  };

  const scrollRight = () => {
    if (containerRef1.current && containerRef2.current) {
      setScrollPosition1((prevPosition) => prevPosition + 550);
      setScrollPosition2((prevPosition) => prevPosition + 550);
      containerRef1.current.scrollLeft += 550;
      containerRef2.current.scrollLeft += 550;
    }
  };

  const [showAllProducts, setShowAllProducts] = useState(false);

  const handleViewAllClick = () => {
    setShowAllProducts(!showAllProducts);
    setStyle("flex-wrap justify-evenly");
    setButtonStyle("hidden");
  };

  return (
    <>
      <div className="mb-20">
        <div className="w-[140px] h-10 justify-start mt-16 items-center gap-4 inline-flex">
          <div className="w-5 h-10 relative">
            <div className="w-5 h-10 left-0 top-0 absolute bg-red-500 rounded" />
          </div>
          <div className="text-red-500 text-base font-semibold font-['Poppins'] leading-tight">
            Our Products
          </div>
        </div>
        <h1 className="not-italic mt-3 font-Inter text-3xl font-bold my-5 text-black">
          Explore Our Products
        </h1>
        <div className={`${buttonStyle} absolute right-14 -mt-10`}>
          <button
            className="mr-3 rounded-full bg-[#F5F5F5] transform -translate-y-1/2    px-2 py-2"
            onClick={scrollLeft}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M11 5L4 12L11 19M4 12H20"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button
            className="mr-3 bg-[#F5F5F5] rounded-full transform -translate-y-1/2  px-2 py-2"
            onClick={scrollRight}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3.5 12H20M20 12L13 5M20 12L13 19"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="ml-3 flex flex-col">
          <Products
            ProductsData={AllProducts}
            containerRef={containerRef1}
            scrollPosition={scrollPosition1}
            newStyle={style}
          />
          <div className="-mt-10">
            <Products
              ProductsData={AllProducts}
              containerRef={containerRef2}
              scrollPosition={scrollPosition2}
              newStyle={style}
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={handleViewAllClick}
            className={`${buttonStyle} bg-[#DB4444] flex font-poppins justify-center text-[16px] items-center px-12 py-4 rounded text-white`}
          >
            View All Products
          </button>
        </div>
      </div>
    </>
  );
};

export default OurProducts;
