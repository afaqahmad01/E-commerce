import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useLocation } from "react-router-dom";

const Child = ({ MonthData }) => {
  const location = useLocation(URL);
  const path = location.pathname;

  const match = path.match(/\/productpage\/:(\d+)/);

  const id = match[1];

  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const [value, setValue] = useState(1);

  const categoriesColor = [
    {
      color: "bg-[#A0BCE0]",
    },
    {
      color: "bg-[#E07575]",
    },
  ];
  const categoriesSize = [
    {
      name: "XS",
    },
    {
      name: "S",
    },
    {
      name: "M",
    },
    {
      name: "L",
    },
    {
      name: "XL",
    },
  ];
  const handleCardSelect = (index) => {
    setSelectedCard(index);
  };
  const handleColorSelect = (index) => {
    setSelectedColor(index);
  };
  const productToDisplay = MonthData.find(
    (product) => product.id === Number(id)
  );
  return (
    <div>
      <div className="flex gap-3">
        <p className="text-[#000] opacity-50">Account &nbsp;&nbsp;/</p>
        <p className="text-[#000] opacity-50">Gaming &nbsp;&nbsp;/</p>
        <p>{productToDisplay.name}</p>
      </div>
      <div>
        <div className="mt-10 flex gap-6">
          <div className="flex flex-row gap-x-4">
            <div className="flex flex-col gap-y-4">
              <div className=" w-[170px] h-[138px] px-[24px] bg-[#F5F5F5] py-[12px]">
                <img
                  src={productToDisplay.images[0]}
                  alt=""
                  className={productToDisplay.newStyle}
                />
              </div>
              <div className=" w-[170px] h-[138px] px-[24px] bg-[#F5F5F5] py-[12px]">
                <img
                  src={productToDisplay.images[1]}
                  alt=""
                  className={productToDisplay.newStyle}
                />
              </div>
              <div className=" w-[170px] h-[138px] px-[24px] bg-[#F5F5F5] py-[12px]">
                <img
                  src={productToDisplay.images[2]}
                  alt=""
                  className={productToDisplay.newStyle}
                />
              </div>
              <div className=" w-[170px] h-[138px] px-[24px] bg-[#F5F5F5] py-[12px]">
                <img
                  src={productToDisplay.images[3]}
                  alt=""
                  className={productToDisplay.newStyle}
                />
              </div>
            </div>
            <div className=" w-[500px] h-[600px] px-[24px] bg-[#F5F5F5] py-[12px]">
              <img
                src={productToDisplay.images[4]}
                alt=""
                className={`${productToDisplay.bigStyle} mt-[154px] mb-[134px]`}
              />
            </div>
          </div>

          <div className="flex flex-col gap-y-2">
            <h1 className="font-poppins text-[24px] font-[600] text-black">
              {productToDisplay.name}
            </h1>

            <div>
              <div className=" flex gap-2">
                <div className="flex ml-0  gap-1">
                  <svg width="16" height="16">
                    <path
                      d={productToDisplay.Star1}
                      fill={productToDisplay.StarColor1}
                    ></path>
                  </svg>
                  <svg width="16" height="16">
                    <path
                      d={productToDisplay.Star2}
                      fill={productToDisplay.StarColor2}
                    ></path>
                  </svg>
                  <svg width="16" height="16">
                    <path
                      d={productToDisplay.Star3}
                      fill={productToDisplay.StarColor3}
                    ></path>
                  </svg>
                  <svg width="16" height="16">
                    <path
                      d={productToDisplay.Star4}
                      fill={productToDisplay.StarColor4}
                    ></path>
                  </svg>
                  <svg width="16" height="16">
                    <path
                      d={productToDisplay.Star5}
                      fill={productToDisplay.StarColor5}
                    ></path>
                  </svg>
                </div>
                <div className="font-poppins text-[14px] -mt-[2px] text-black  flex">
                  <p className="border-r border-black pr-4 opacity-50">{`(${productToDisplay.rating} Reviews)`}</p>
                  <p className="font-poppins text-[14px]  text-[#0F6] ml-4 font-[400] !opacity-100">
                    In Stock
                  </p>
                </div>
              </div>
            </div>
            <p className="font-poppins text-[24px] text-black">
              {productToDisplay.price}
            </p>
            <p className="font-poppins text-[14px] text-black border-b pb-6 pt-2">
              {productToDisplay.details}
            </p>
            <p className="font-Inter text-[20px] text-black flex gap-3">
              Colours:
              {categoriesColor.map((productToDisplay, index) => (
                <div
                  key={index}
                  className="flex gap-2 mt-[5px]"
                  onClick={() => handleColorSelect(index)}
                >
                  <span
                    className={`${
                      selectedColor === index ? "outline" : ""
                    } outline-black outline-[1px] border-white border-2 rounded-full h-4 w-4 box-border ${
                      productToDisplay.color
                    }`}
                  ></span>
                </div>
              ))}
            </p>
            <p className="font-Inter text-[14px] text-black flex gap-3">
              Size:
              {categoriesSize.map((productToDisplay, index) => (
                <div className="flex gap-4 -mt-1 justify-center items-center">
                  <span
                    className={` border border-gray-400 text-center pt-1 text-[14px] rounded-[30%] h-[32px] w-[32px] hover:bg-[#DB4444] ${
                      selectedCard === index
                        ? "bg-[#DB4444] text-white"
                        : "text-black"
                    }`}
                    onClick={() => handleCardSelect(index)}
                  >
                    <p className="w-[12px] ml-2 mt-1 text-[11px] h-[20px]">
                      {productToDisplay.name}
                    </p>
                  </span>
                </div>
              ))}
            </p>
            <div className="flex gap-5">
              <div className="border rounded-lg overflow-auto mt-2 h-10 flex">
                <button
                  className={`hover:bg-[#DB4444] flex  font-poppins justify-center text-[16px] items-center px-3 py-1  text-black hover:text-white`}
                  onClick={() => {
                    if (value > 1) {
                      setValue(value - 1);
                    }
                  }}
                  disabled={value === 0}
                >
                  <FiMinus />
                </button>

                <span className="py-2 px-5 text-black text-[16px] font-poppins">
                  {value}
                </span>
                <button
                  className={` hover:bg-[#DB4444] flex font-poppins justify-center text-[16px] items-center px-3 py-1  text-black hover:text-white`}
                  onClick={() => {
                    if (value < 9) {
                      setValue(value + 1);
                    }
                  }}
                  disabled={value === 9}
                >
                  <FiPlus />
                </button>
              </div>
              <button
                className={` bg-[#DB4444] flex font-poppins justify-center text-[16px] items-center px-8 py-2 mt-2 rounded text-white`}
              >
                Buy Now
              </button>
              <button
                className={` bg-white text-black rounded-lg text-[16px] h-[40px] w-[40px] border items-center mt-2`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  className="mx-auto"
                >
                  <path
                    d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="border border-collapse">
              <div className="border p-3 flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <g clip-path="url(#clip0_261_4843)">
                    <path
                      d="M11.6673 31.6667C13.5083 31.6667 15.0007 30.1743 15.0007 28.3333C15.0007 26.4924 13.5083 25 11.6673 25C9.82637 25 8.33398 26.4924 8.33398 28.3333C8.33398 30.1743 9.82637 31.6667 11.6673 31.6667Z"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M28.3333 31.6667C30.1743 31.6667 31.6667 30.1743 31.6667 28.3333C31.6667 26.4924 30.1743 25 28.3333 25C26.4924 25 25 26.4924 25 28.3333C25 30.1743 26.4924 31.6667 28.3333 31.6667Z"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.33398 28.3335H7.00065C5.89608 28.3335 5.00065 27.4381 5.00065 26.3335V21.6668M3.33398 8.3335H19.6673C20.7719 8.3335 21.6673 9.22893 21.6673 10.3335V28.3335M15.0007 28.3335H25.0007M31.6673 28.3335H33.0007C34.1052 28.3335 35.0007 27.4381 35.0007 26.3335V18.3335M35.0007 18.3335H21.6673M35.0007 18.3335L30.5833 10.9712C30.2218 10.3688 29.5708 10.0002 28.8683 10.0002H21.6673"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 28H6.66667C5.5621 28 4.66667 27.1046 4.66667 26V21.3333M3 8H19.3333C20.4379 8 21.3333 8.89543 21.3333 10V28M15 28H24.6667M32 28H32.6667C33.7712 28 34.6667 27.1046 34.6667 26V18M34.6667 18H21.3333M34.6667 18L30.2493 10.6377C29.8878 10.0353 29.2368 9.66667 28.5343 9.66667H21.3333"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5 11.8182H11.6667"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1.81836 15.4545H8.48503"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5 19.0909H11.6667"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_261_4843">
                      <rect width="40" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div>
                  <p className="font-poppins text-[16px] font-[500]">
                    Free Delivery
                  </p>
                  <p className="border-b mt-1 font-poppins text-[12px] font-[500]">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>
              <div className="border p-3 flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <g clip-path="url(#clip0_261_4865)">
                    <path
                      d="M33.3327 18.3334C32.9251 15.4004 31.5645 12.6828 29.4604 10.5992C27.3564 8.51557 24.6256 7.18155 21.6888 6.80261C18.752 6.42366 15.7721 7.02082 13.208 8.5021C10.644 9.98337 8.6381 12.2666 7.49935 15M6.66602 8.33335V15H13.3327"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.66602 21.6667C7.07361 24.5997 8.43423 27.3173 10.5383 29.4009C12.6423 31.4845 15.3731 32.8185 18.3099 33.1974C21.2467 33.5764 24.2266 32.9792 26.7907 31.4979C29.3547 30.0167 31.3606 27.7335 32.4994 25M33.3327 31.6667V25H26.666"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_261_4865">
                      <rect width="40" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div>
                  <p className="font-poppins text-[16px] font-[500]">
                    Return Delivery
                  </p>
                  <p className="font-poppins mt-1 text-[12px] font-[500]">
                    Free 30 Days Delivery Returns.
                    <span className="border-b">Details</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[140px] h-10 mt-10 justify-start items-center gap-4 inline-flex">
          <div className="w-5 h-10 relative">
            <div className="w-5 h-10 left-0 top-0 absolute bg-red-500 rounded" />
          </div>
          <div className="text-red-500 text-base font-semibold font-['Poppins'] leading-tight">
            Related Item
          </div>
        </div>
      </div>
    </div>
  );
};

export default Child;
