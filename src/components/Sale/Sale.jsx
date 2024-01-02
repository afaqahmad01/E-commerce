const Sale = () => {
  return (
    <>
      <div className="h-[500px] w-[85vw] bg-black border-4 border-black flex mx-auto bg-gradient-to-r from-zinc-900 to-zinc-900">
        <div>
          <p className="text-[#00FF66] font-poppins text-4 font-[600] mt-[69px] ml-[56px]">
            Categories
          </p>
          <p className="text-white font-poppins text-5xl font-[600] mt-[32px] ml-[56px] w-[443px] h-[120px] tracking-[1.92px]">
            Enhance Your Music Experience
          </p>
          <div className="text-white font-poppins flex gap-4  font-[600] mt-[32px] ml-[56px] w-[320px] h-[62px] ">
            <div className="h-[62px] w-[62px] bg-white rounded-full flex flex-col justify-center items-center">
              <p className="text-black text-[15px] font-poppins">23</p>
              <p className="text-black -mt-1 text-[10px] font-poppins">Hours</p>
            </div>
            <div className="h-[62px] w-[62px] bg-white rounded-full flex flex-col justify-center items-center">
              <p className="text-black text-[15px] font-poppins">05</p>
              <p className="text-black -mt-1 text-[10px] font-poppins">Days</p>
            </div>
            <div className="h-[62px] w-[62px] bg-white rounded-full flex flex-col justify-center items-center">
              <p className="text-black text-[15px] font-poppins">59</p>
              <p className="text-black -mt-1 text-[10px] font-poppins">
                Minutes
              </p>
            </div>
            <div className="h-[62px] w-[62px] bg-white rounded-full flex flex-col justify-center items-center">
              <p className="text-black text-[15px] font-poppins">35</p>
              <p className="text-black -mt-1 text-[10px] font-poppins">
                seconds
              </p>
            </div>
          </div>
          <button className="bg-[#00FF66] px-6 py-3 mt-[40px] ml-[56px] rounded text-white">
            Buy Now!
          </button>
        </div>
        <div className="  mt-[82px] ">
          <img src="https://i.imgur.com/GTuPh0l.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Sale;
