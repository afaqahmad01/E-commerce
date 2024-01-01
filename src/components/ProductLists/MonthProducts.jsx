import "../../App.css";
import Products from "./Products";
import { MonthData } from "../JsonFiles/MonthProducts";
const MonthProducts = () => {
  const newStyle = "justify-evenly";

  return (
    <>
      <div className="mb-20">
        <h1 className="font-[600] not-italic border-l-[13px] mt-16 pl-6 ml-4 font-poppins text-md mb-5 border-[#DB4444] text-[#DB4444]">
          This Month
        </h1>
        <div className="flex">
          <h1 className=" not-italic ml-3 font-Inter text-3xl font-bold my-5  text-black  ">
            Best Selling Products
          </h1>
          <div className="absolute right-14 mt-4">
            <div className="flex justify-center items-center">
              <button
                className={` bg-[#DB4444] flex font-poppins justify-center text-[16px] items-center px-10 py-3 rounded text-white`}
              >
                View All
              </button>
            </div>
          </div>
        </div>
        <div className="ml-3  ">
          <Products ProductsData={MonthData} newStyle={newStyle} />
        </div>
      </div>
    </>
  );
};

export default MonthProducts;
