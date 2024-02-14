import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Landing = () => {
  return (
    <div className=" lg:h-screen [#B2AC88] [#FADA5E] bg-[#808080] text-white font-sans relative">
      <div className="top flex items-center mb-32 pl-[7%] pt-[4%]">
        <img
          src="https://t3.ftcdn.net/jpg/04/26/46/66/360_F_426466645_EAgVxqHG2XK22Ys2PmLLPgmlEDC3Sn3X.jpg"
          alt=""
          className=" w-14 rounded-full"
        />
        <span className=" text-5xl  font-bold ml-5">LOGO</span>
      </div>
      <div className="main  flex justify-evenly items-center flex-wrap-reverse">
        <div className="pl-[7%] lg:pl-0 lg:w-[40%]">
          <h1 className=" text-3xl lg:text-5xl font-bold pb-5 lg:pb-10">
            Unleashing Boundless Possibilities: Igniting Innovation, Embracing
            Creativity
          </h1>
          <button className="btn  w-[80%] h-full pt-6 pb-6 text-center text-black text-3xl hover:text-4xl  md:text-4xl bg-[#FADA5E] rounded-md shadow-md lg:hover:text-[40px] hover:shadow-xl md:scale-100 scale-75 ">
            Sign Up for Free!
          </button>
        </div>
        <div className=" flex justify-center items-center flex-col lg:w-[40%] mb-5">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQMmE9gZPZyQGO1iuvLTubIcnBV7e1Pz8VG8MlJcC1xg&s"
            alt=""
            className="  aspect-square lg:w-[40%] rounded-full mb-4"
          />
          <hr className=" h-1 w-[60%] origin-center bg-white scale-0" />
        </div>
      </div>
      <section className="arrow hidden lg:block">
        <ExpandMoreIcon
          fontSize="large"
          className="hidden lg:block absolute bottom-2 left-1/2 -translate-x-1/2 cursor-pointer"
        />
      </section>
    </div>
  );
};

export default Landing;
