import "../../App.css";
const Featured = () => {
  const newStyle = "justify-evenly";

  return (
    <>
      <div className="mb-20">
        <h1 className="font-[600] not-italic border-l-[13px] mt-16 pl-6 ml-4 font-poppins text-md mb-5 border-[#DB4444] text-[#DB4444]">
          Featured
        </h1>
        <div className="flex">
          <h1 className=" not-italic ml-3 font-Inter text-3xl font-bold my-5 text-black  ">
            New Arrival
          </h1>
        </div>
        <div className="flex gap-6">
          <div className="bg-black w-[570px] h-[600px] relative">
            <img
              src="https://i.imgur.com/nAAYKXs.png"
              alt=""
              className="mx-auto mt-[89px]"
            />
            <div className="absolute left-[32px] gap-y-4 font-Inter bottom-[80px] text-white flex flex-col w-[242px] h-[82px]">
              <span className="text-3xl">Play Station 5</span>
              <span>
                Black and White version of the PS5 coming out on sale.
              </span>
              <span>
                <button className="hover:border-b-[1px] border-white">
                  Shop Now
                </button>
              </span>
            </div>
          </div>
          <div>
            <div className="relative bg-[#0D0D0D] w-[570px] h-[284px]">
              <img
                src="https://i.imgur.com/GYAI2Uj.png"
                alt=""
                className="ml-[140px]"
              />
              <div className="absolute left-[24px] gap-y-2 font-Inter bottom-[50px] text-white flex flex-col w-[265px] h-[82px]">
                <span className="text-2xl">Women’s Collections</span>
                <span className="text-[14px]">
                  Featured woman collections that give you another vibe.
                </span>
                <span>
                  <button className="hover:border-b-[1px] text-[14px] border-white">
                    Shop Now
                  </button>
                </span>
              </div>
            </div>
            <div className="flex gap-[29px] mt-[29px]">
              <div className="relative bg-black w-[270px] h-[284px] bg-gradient-to-r from-zinc-900 to-zinc-900">
                <img
                  src="https://i.imgur.com/phCbxqo.png"
                  alt=""
                  className="mx-auto mt-8 "
                />
                <div className="absolute left-[24px] gap-y-1 font-Inter bottom-[20px] text-white flex flex-col w-[200px] h-[85px]">
                  <span className="text-2xl">Speakers</span>
                  <span className="text-[14px]">Amazon wireless speakers </span>
                  <span>
                    <button className="hover:border-b-[1px] text-[14px] border-white">
                      Shop Now
                    </button>
                  </span>
                </div>
              </div>
              <div className="relative bg-black w-[270px]  h-[284px] bg-gradient-to-r from-zinc-900 to-zinc-900">
                <img
                  src="https://i.imgur.com/2hZ1K8d.png"
                  alt=""
                  className="mx-auto mt-8"
                />
                <div className="absolute left-[24px] gap-y-1 font-Inter bottom-[24px] text-white flex flex-col w-[200px] h-[85px]">
                  <span className="text-2xl">Perfume</span>
                  <span className="text-[14px]">GUCCI INTENSE OUD EDP </span>
                  <span>
                    <button className="hover:border-b-[1px] text-[14px] border-white">
                      Shop Now
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
