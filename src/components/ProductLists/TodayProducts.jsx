import Products from "./Products";

const TodayProducts = () => {
  return (
    <>
      <div className="mb-56">
        <h1 className="font-[600] not-italic border-l-[13px] mt-32 pl-6 ml-4 font-[popins] text-md mb-16 border-[#DB4444] text-[#DB4444]">
          Today's
        </h1>
        <div>
          <Products />
        </div>
      </div>
    </>
  );
};

export default TodayProducts;
