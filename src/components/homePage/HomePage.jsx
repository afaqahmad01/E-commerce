import Products from "../ProductLists/Products";
import Layout from "../Layout/Layout";
import SideBar from "../SideBar/SideBar";
import Slider from "../Slider/Slider";
import TodayProducts from "../ProductLists/TodayProducts";
import Categories from "../Categories/Categories";

const HomePage = () => {
  return (
    <>
      <Layout>
        <div className="mx-auto  w-[86vw]">
          <div className="flex">
            <SideBar />
            <Slider />
          </div>
          <div>
            <TodayProducts />
            <Categories />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default HomePage;
