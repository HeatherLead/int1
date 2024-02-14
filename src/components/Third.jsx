import React from "react";

const Third = () => {
  return (
    <div className=" bg-[#B2AC88]">
      <h1 className="text-white text-center w-full text-4xl font-bold pt-[4%] ">
        Wondering why to join us
      </h1>
      <section className="  flex justify-evenly flex-wrap pt-20 pb-20">
        <div className=" text-white text-center p-5">
          <h1 className=" text-6xl font-bold">+12K</h1>
          <p className=" text-xl">More than 12k students</p>
        </div>
        <div className=" text-white text-center p-5">
          <h1 className=" text-6xl font-bold">100+</h1>
          <p className=" text-xl">hundred plus courses to offer</p>
        </div>
        <div className=" text-white text-center p-5">
          <h1 className=" text-6xl font-bold">25k</h1>
          <p className=" text-xl">More than 25k stipend</p>
        </div>
        <div className=" text-white text-center p-5">
          <h1 className=" text-6xl font-bold">4hr</h1>
          <p className=" text-xl">Learn everything in just a day</p>
        </div>
      </section>
      <div className="main flex justify-evenly  flex-wrap">
        <div className="lg:w-1/4 p-5 lg:pt-48 flex flex-col  items-center">
          <img
            src="https://static.thenounproject.com/png/511228-200.png"
            alt=""
            className=" w-48"
          />
          <p className=" text-lg text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            vitae! Omnis a, deserunt architecto dolorem labore doloribus
            aliquam. Facilis, rem.
          </p>
        </div>
        <div className="lg:w-1/4 p-5 lg:pt-24 flex flex-col  items-center">
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/sport-and-awards/champion-winner-trophy-icon.png"
            className=" w-48"
            alt=""
          />
          <p className=" text-lg text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            vitae! Omnis a, deserunt architecto dolorem labore doloribus
            aliquam. Facilis, rem.
          </p>
        </div>
        <div className="lg:w-1/4 p-5 lg:pt-0 flex flex-col  items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5779/5779864.png"
            alt=""
            className=" w-48"
          />
          <p className=" text-lg text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            vitae! Omnis a, deserunt architecto dolorem labore doloribus
            aliquam. Facilis, rem.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Third;
