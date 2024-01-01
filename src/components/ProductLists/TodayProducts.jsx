import "../../App.css";
import Products from "./Products";
import CountUp from "react-countup";
import { ProductsData } from "../JsonFiles/TodayProducts";
import { useEffect, useRef, useState } from "react";

const TodayProducts = () => {
  const containerRef1 = useRef(null);
  const [style, setStyle] = useState("");
  const [buttonStyle, setButtonStyle] = useState("");

  const [scrollPosition1, setScrollPosition1] = useState(0);

  const scrollLeft = () => {
    if (containerRef1.current) {
      setScrollPosition1((prevPosition) => prevPosition - 550);
      containerRef1.current.scrollLeft -= 550;
    }
  };

  const scrollRight = () => {
    if (containerRef1.current) {
      setScrollPosition1((prevPosition) => prevPosition + 550);

      containerRef1.current.scrollLeft += 550;
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
        <h1 className="font-[600] not-italic border-l-[13px] mt-16 pl-6 ml-4 font-poppins text-md mb-5 border-[#DB4444] text-[#DB4444]">
          Today's
        </h1>
        <div className="flex gap-28">
          <h1 className=" not-italic ml-3 font-Inter text-3xl font-bold my-5  text-black  ">
            Flash Sales
          </h1>
          <div>
            <h1 className="text-[10px] mt-3">
              Days&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Minutes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Seconds
            </h1>
            <div className="flex text-3xl font-bold ">
              <p className="font-Inter">3</p>
              <p className="text-[#DB4444] text-xl mt-1"> &nbsp; : &nbsp; </p>
              <p className="font-Inter">23</p>
              <p className="text-[#DB4444] text-xl mt-1"> &nbsp; : &nbsp; </p>
              <p className="font-Inter">19</p>
              <p className="text-[#DB4444] text-xl mt-1"> &nbsp; : &nbsp; </p>
              <CountUp
                start={60}
                duration={600}
                end={0}
                className="font-Inter"
              ></CountUp>
            </div>
          </div>
        </div>
        <div className={`${buttonStyle} absolute right-14 -mt-10`}>
          <button
            className="mr-3 bg-[#F5F5F5] rounded-full transform -translate-y-1/2  px-2 py-2"
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

        <div className="ml-3">
          <Products
            ProductsData={ProductsData}
            containerRef={containerRef1}
            scrollPosition={scrollPosition1}
            newStyle={style}
          />
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

export default TodayProducts;
