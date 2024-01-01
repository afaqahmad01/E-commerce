import Layout from "../Layout/Layout";
import SideBar from "../SideBar/SideBar";
import Slider from "../Slider/Slider";
import TodayProducts from "../ProductLists/TodayProducts";
import Categories from "../Categories/Categories";
import MonthProducts from "../ProductLists/MonthProducts";
import OurProducts from "../ProductLists/OurProducts";
import Sale from "../Sale/Sale";
import Featured from "../Featured/Featured";

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
            <MonthProducts />
            <Sale />

            <OurProducts />
            <Featured />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default HomePage;
