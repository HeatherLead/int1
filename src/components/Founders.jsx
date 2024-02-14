import React from "react";
import img1 from "../images/cofounder.png";
import img2 from "../images/coFounder2.jpg";

const Founders = () => {
  return (
    <div className=" bg-[#808080]">
      <h1 className="pl-[7%] pt-[4%] text-5xl font-bold text-white">
        Who are we
      </h1>
      <p className="pl-[7%] text-lg md:w-1/2 text-white">
        We are formidable team, united by a shared vision to revolutionize the
        food industry and marketing industry
      </p>
      <div className="imgHolder flex flex-wrap justify-evenly pt-20 pb-20">
        <img
          src={img2}
          alt=""
          className="img aspect-[3/4]  w-64 object-cover pt-5 pb-5 "
        />
        <img
          src="https://i0.wp.com/grehlakshmi.com/wp-content/uploads/2023/01/SharkPatil12.jpg"
          alt=""
          className="img aspect-[3/4] w-64 object-cover pt-5 pb-5 "
        />
        <img
          src={img1}
          alt=""
          className="img aspect-[3/4] w-64 object-cover pt-5 pb-5 "
        />
      </div>
    </div>
  );
};
export default Founders;
