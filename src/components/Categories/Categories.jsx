import { Card } from "antd";
import "../../App.css";
import { useState } from "react";
import { CiMobile1, CiHeadphones, CiCamera } from "react-icons/ci";
import { IoGameControllerOutline, IoWatchOutline } from "react-icons/io5";
import { LiaTvSolid } from "react-icons/lia";

const Categories = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const categoriesData = [
    {
      name: "Phones",
      iconKey: <CiMobile1 />,
    },
    {
      name: "Computers",
      iconKey: <LiaTvSolid />,
    },
    {
      name: "SmartWatches",
      iconKey: <IoWatchOutline />,
    },
    {
      name: "Camera",
      iconKey: <CiCamera />,
    },
    {
      name: "Headphones",
      iconKey: <CiHeadphones />,
    },
    {
      name: "Gaming",
      iconKey: <IoGameControllerOutline />,
    },
  ];

  const handleCardSelect = (index) => {
    setSelectedCard(index);
  };

  return (
    <>
      <div className="mb-20">
        <div className="w-[140px] h-10 justify-start items-center gap-4 inline-flex">
          <div className="w-5 h-10 relative">
            <div className="w-5 h-10 left-0 top-0 absolute bg-red-500 rounded" />
          </div>
          <div className="text-red-500 text-base font-semibold font-['Poppins'] leading-tight">
            Categories
          </div>
        </div>
        <h1 className=" not-italic mt-2  font-Inter text-3xl font-bold mb-16 text-black  ">
          Browse By Category
        </h1>

        <div className="flex gap-6 overflow-x-auto overflow-y-hidden no-scrollbar ml-6">
          {categoriesData.map((category, index) => (
            <Card
              key={category.name}
              className={`text-black border-2 !h-[145px] !w-[170px] flex items-center justify-center hover:bg-[#DB4444] ${
                selectedCard === index ? "bg-[#DB4444]" : ""
              }`}
              onClick={() => handleCardSelect(index)}
            >
              <div className="text-4xl flex items-center justify-center">
                {category.iconKey}
              </div>
              <p className="pl-1 pt-4">{category.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
