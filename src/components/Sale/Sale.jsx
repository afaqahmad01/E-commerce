const Sale = () => {
  return (
    <>
      <div className="h-[500px] bg-black border-4 border-black flex w-[1170px] mx-auto">
        <div>
          <p className="text-[#00FF66] font-[popins] text-4 font-[600] mt-[69px] ml-[56px]">
            Categories
          </p>
          <p className="text-white font-[popins] text-5xl font-[600] mt-[32px] ml-[56px] w-[443px] h-[120px] tracking-[1.92px]">
            Enhance Your Music Experience
          </p>
          <div className="text-white font-[popins] flex gap-4  font-[600] mt-[32px] ml-[56px] w-[320px] h-[62px] ">
            <div className="h-[62px] w-[62px] bg-white rounded-full flex flex-col justify-center items-center">
              <p className="text-black text-[15px] font-[popins]">23</p>
              <p className="text-black -mt-1 text-[13px] font-[popins]">
                Hours
              </p>
            </div>
            <div className="h-[62px] w-[62px] bg-white rounded-full flex flex-col justify-center items-center">
              <p className="text-black text-[15px] font-[popins]">05</p>
              <p className="text-black -mt-1 text-[13px] font-[popins]">Days</p>
            </div>
            <div className="h-[62px] w-[62px] bg-white rounded-full flex flex-col justify-center items-center">
              <p className="text-black text-[15px] font-[popins]">59</p>
              <p className="text-black -mt-1 text-[13px] font-[popins]">
                Minutes
              </p>
            </div>
            <div className="h-[62px] w-[62px] bg-white rounded-full flex flex-col justify-center items-center">
              <p className="text-black text-[15px] font-[popins]">35</p>
              <p className="text-black -mt-1 text-[13px] font-[popins]">
                seconds
              </p>
            </div>
          </div>
          <button className="bg-[#00FF66] px-6 py-3 mt-[40px] ml-[56px] rounded text-white">
            Buy Now!
          </button>
        </div>
        <div className="  mt-[82px]">
          <img src="https://i.imgur.com/GTuPh0l.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Sale;
