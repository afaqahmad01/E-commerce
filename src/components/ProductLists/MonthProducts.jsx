import "../../App.css";
import Products from "./Products";
import { MonthData } from "../JsonFiles/MonthProducts";
const MonthProducts = () => {
  const newStyle = "justify-evenly";

  return (
    <>
      <div className="mb-20">
        <div className="w-[140px] h-10 justify-start items-center gap-4 inline-flex">
          <div className="w-5 h-10 relative">
            <div className="w-5 h-10 left-0 top-0 absolute bg-red-500 rounded" />
          </div>
          <div className="text-red-500 text-base font-semibold font-['Poppins'] leading-tight">
            This Month
          </div>
        </div>
        <div className="flex">
          <h1 className=" not-italic mt-3 font-Inter text-3xl font-bold my-5  text-black  ">
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
        <div className=" mt-6">
          <Products ProductsData={MonthData} newStyle={newStyle} />
        </div>
      </div>
    </>
  );
};

export default MonthProducts;
