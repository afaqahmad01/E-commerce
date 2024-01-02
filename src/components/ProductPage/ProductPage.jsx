import { MonthData } from "../JsonFiles/MonthProducts";
import Layout from "../Layout/Layout";
import Products from "../ProductLists/Products";
import Child from "./Child";

const ProductPage = () => {
  const newStyle = "justify-evenly";

  return (
    <>
      <Layout>
        <div className="mx-auto w-[80vw] mt-10 text-[14px]">
          <Child MonthData={MonthData} />
        </div>
        <div className="mt-10">
          <Products ProductsData={MonthData} newStyle={newStyle} />
        </div>
      </Layout>
    </>
  );
};

export default ProductPage;
