import { useState } from "react";
import { Card } from "antd";

const Categories = () => {
  const categoriesData = {
    categories: [
      {
        name: "Phones",
        iconLink:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTgB0o4Ta4ITyXIatd4hC20TQD-R52Nd2cfw&usqp=CAU",
      },
      {
        name: "Computers",
        iconLink:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjHX0NTf6mcVsjr2qd6j-3t9VrKiFDqwgV9w&usqp=CAU",
      },
      {
        name: "SmartWatches",
        iconLink:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1vcIihKGDKpn7t4Fk8U6vVv1nZsipbNvz0Q&usqp=CAU",
      },
      {
        name: "Camera",
        iconLink:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgdUQ9ckc1EgUcVFqYtHIjYMhCNbucH6azDg&usqp=CAU",
      },
      {
        name: "Headphones",
        iconLink:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVZO527FXhDF2b06JBHfd7SOA1f1EF7ktVqg&usqp=CAU",
      },
      {
        name: "Gaming",
        iconLink:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5XrerCLJdbReROI_eBhdFpAKemkW2Pb1cLw&usqp=CAU",
      },
    ],
  };

  return (
    <>
      <div className="mb-56">
        <h1 className="font-[600] not-italic border-l-[13px] mt-32 pl-6 ml-4 font-[popins] text-md mb-16 border-[#DB4444] text-[#DB4444]">
          Categories
        </h1>

        <div className="flex flex-wrap justify-around ">
          {categoriesData.categories.map((category) => (
            <Card
              key={category.name}
              className={`text-black border-2 h-[145px] w-[170px] flex flex-col items-center justify-center hover:bg-[#DB4444]}`}
            >
              <img
                src={category.iconLink}
                alt={category.name}
                className="!w-[56px] !h-[56px] mx-auto"
              />
              <p className="pl-1 pt-4">{category.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
