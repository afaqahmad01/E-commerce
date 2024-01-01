import { Card } from "antd";
import { Link } from "react-router-dom";

const Products = ({ ProductsData, containerRef, scrollPosition, newStyle }) => {
  return (
    <>
      <Link to="/productpage">
        <div className="relative">
          <div
            ref={containerRef}
            className={`flex ${newStyle} gap-6  overflow-x-auto rounded-lg overflow-y-hidden no-scrollbar`}
            style={{ scrollBehavior: "smooth", scrollLeft: scrollPosition }}
          >
            {ProductsData.map((category, index) => (
              <div className="mb-10" key={category.name}>
                <Card
                  className={`text-black border-none rounded-lg !h-[270px] !w-[250px] bg-[#F5F5F5] flex flex-col items-center justify-center relative duration-500 ease-in-out group`}
                  style={{ position: "relative" }}
                >
                  <div className="">
                    <div className="flex">
                      <div
                        className={`bg-[#DB4444] !w-min !h-min px-1 rounded-lg text-white ${category.discountStyle} `}
                      >
                        {category.discount}
                      </div>
                      <p
                        className={`flex flex-col gap-2 ${category.heartStyle} mt-0 `}
                      >
                        <div className="bg-white rounded-full px-1 py-1 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M8 5C5.7912 5 4 6.73964 4 8.88594C4 10.6185 4.7 14.7305 11.5904 18.8873C11.7138 18.961 11.8555 19 12 19C12.1445 19 12.2862 18.961 12.4096 18.8873C19.3 14.7305 20 10.6185 20 8.88594C20 6.73964 18.2088 5 16 5C13.7912 5 12 7.35511 12 7.35511C12 7.35511 10.2088 5 8 5Z"
                              stroke="black"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="bg-white rounded-full px-1 py-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="16"
                            viewBox="0 0 22 16"
                            fill="none"
                          >
                            <path
                              d="M20.257 6.962C20.731 7.582 20.731 8.419 20.257 9.038C18.764 10.987 15.182 15 11 15C6.81801 15 3.23601 10.987 1.74301 9.038C1.51239 8.74113 1.38721 8.37592 1.38721 8C1.38721 7.62408 1.51239 7.25887 1.74301 6.962C3.23601 5.013 6.81801 1 11 1C15.182 1 18.764 5.013 20.257 6.962V6.962Z"
                              stroke="black"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M11 11C12.6569 11 14 9.65685 14 8C14 6.34315 12.6569 5 11 5C9.34315 5 8 6.34315 8 8C8 9.65685 9.34315 11 11 11Z"
                              stroke="black"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </p>
                    </div>
                    <div className="flex items-center justify-center !h-[180px] !w-[190px]">
                      <img
                        src={category.iconKey}
                        alt=""
                        className={` ${category.style} h-min`}
                      />
                    </div>
                  </div>
                  <div className="relative translate-y-12 duration-500 group-hover:-translate-y-10">
                    <i className="not-italic block bg-black text-white w-[248px] h-[41px] font-poppins absolute text-center non-italic text-lg transition-transform duration-500 ease-in-out">
                      Add to cart
                    </i>
                  </div>
                </Card>
                <Card className={`text-black w-[250px] pl-0 rounded-lg`}>
                  <p className="pl-0 pt-4 font-poppins text-[16px] font-[520]">
                    {category.name}
                  </p>
                  <div className="flex">
                    <p className="pl-0 pt-1 font-poppins text-[14px] text-[#DB4444] font-[520]">
                      {category.discountedPrice}&nbsp;&nbsp;&nbsp;&nbsp;
                    </p>
                    <p className="pl-0 pt-1 line-through opacity-50 font-poppins text-[14px] text-black font-[520]">
                      {category.price}
                    </p>
                  </div>
                  <div className=" flex gap-2">
                    <div className="flex ml-0  gap-1">
                      <svg width="16" height="16">
                        <path
                          d={category.Star1}
                          fill={category.StarColor1}
                        ></path>
                      </svg>
                      <svg width="16" height="16">
                        <path
                          d={category.Star2}
                          fill={category.StarColor2}
                        ></path>
                      </svg>
                      <svg width="16" height="16">
                        <path
                          d={category.Star3}
                          fill={category.StarColor3}
                        ></path>
                      </svg>
                      <svg width="16" height="16">
                        <path
                          d={category.Star4}
                          fill={category.StarColor4}
                        ></path>
                      </svg>
                      <svg width="16" height="16">
                        <path
                          d={category.Star5}
                          fill={category.StarColor5}
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <p className="opacity-50 -mt-0.5 font-poppins text-[14px] text-black font-[520]">
                        {category.rating}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Link>
      {/* <div className="flex gap-10 my-20">
        <div className="w-[270px] h-[250px] relative bg-neutral-100 rounded">
          <div className="px-3 py-1 left-[12px] top-[12px] absolute bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
            <div className="text-neutral-50 text-xs font-normal font-['Poppins'] leading-[18px]">
              -35%
            </div>
          </div>
          <div className="w-[270px] h-[41px] left-0 top-[209px] absolute bg-black rounded-bl rounded-br" />
          <div className="left-[87px] top-[217px] absolute text-white text-base font-medium font-['Poppins'] leading-normal">
            Add To Cart
          </div>
          <div className="left-[224px] top-[12px] absolute flex-col justify-start items-start gap-2 inline-flex">
            <div className="w-[34px] h-[34px] relative">
              <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
              <div className="w-6 h-6 left-[5px] top-[5px] absolute" />
            </div>
            <div className="w-[34px] h-[34px] relative">
              <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
              <div className="w-6 h-6 px-[2.39px] py-[5px] left-[5px] top-[5px] absolute justify-center items-center inline-flex">
                <div className="w-[19.23px] h-3.5 relative"></div>
              </div>
            </div>
          </div>
          <div className="w-[190px] h-[180px] pt-10 pb-[39px] left-[40px] top-[15px] absolute justify-center items-center inline-flex">
            <img
              className="w-[191px] h-[101px]"
              src="https://via.placeholder.com/191x101"
            />
          </div>
        </div>
        <div className="w-[270px] h-[250px] relative bg-neutral-100 rounded">
          <div className="px-3 py-1 left-[12px] top-[12px] absolute bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
            <div className="text-neutral-50 text-xs font-normal font-['Poppins'] leading-[18px]">
              -40%
            </div>
          </div>
          <div className="w-[270px] h-[41px] left-0 top-[209px] absolute bg-black rounded-bl rounded-br" />
          <div className="left-[87px] top-[217px] absolute text-white text-base font-medium font-['Poppins'] leading-normal">
            Add To Cart
          </div>
          <div className="left-[224px] top-[12px] absolute flex-col justify-start items-start gap-2 inline-flex">
            <div className="w-[34px] h-[34px] relative">
              <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
              <div className="w-6 h-6 left-[5px] top-[5px] absolute" />
            </div>
            <div className="w-[34px] h-[34px] relative">
              <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
              <div className="w-6 h-6 px-[2.39px] py-[5px] left-[5px] top-[5px] absolute justify-center items-center inline-flex">
                <div className="w-[19.23px] h-3.5 relative"></div>
              </div>
            </div>
          </div>
          <div className="w-[190px] h-[180px] px-[9px] py-3.5 left-[40px] top-[35px] absolute justify-center items-center inline-flex">
            <img
              className="w-[172px] h-[152px]"
              src="https://via.placeholder.com/172x152"
            />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Products;
