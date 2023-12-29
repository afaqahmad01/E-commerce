import { Card } from "antd";
import "../../App.css";
import { useState } from "react";
import { CiMobile1, CiHeadphones, CiCamera } from "react-icons/ci";
import { RiComputerLine } from "react-icons/ri";
import { CgAppleWatch } from "react-icons/cg";
import { IoGameControllerOutline } from "react-icons/io5";

const Categories = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const categoriesData = [
    {
      name: "Phones",
      iconKey: <CiMobile1 />,
    },
    {
      name: "Computers",
      iconKey: <RiComputerLine />,
    },
    {
      name: "SmartWatches",
      iconKey: <CgAppleWatch />,
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
        <h1 className="font-[600] not-italic border-l-[13px] mt-10 pl-6 ml-6 font-[popins] text-md mb-4 border-[#DB4444] text-[#DB4444]">
          Categories
        </h1>
        <h1 className=" not-italic ml-6  font-[Inter] text-3xl font-bold mb-16 text-black  ">
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
