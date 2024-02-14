import React, { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(600);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <div className=" bg-[#808080] flex justify-center flex-col items-center">
      <div className="text-center">
        <h1 className=" font-bold text-3xl md:text-5xl text-white text-center  pb-20 pt-20">
          Time is Running Out!
        </h1>
        <div className=" flex justify-center">
          <div className="lg:pl-6 lg:pr-5 pl-2 pr-2  text-center">
            <p className=" font-bold text-white text-5xl">00</p>
            <p className=" font-bold text-white text-2xl">Hours</p>
          </div>
          <div className="lg:pl-6 lg:pr-5 pl-2 pr-2  text-center">
            <p className=" font-bold text-white text-5xl">{minutes}</p>
            <p className=" font-bold text-white text-2xl">Minutes</p>
          </div>
          <div className="lg:pl-6 lg:pr-5 pl-2 pr-2  text-center">
            <p className=" font-bold text-white text-5xl">
              {remainingSeconds < 10 ? "0" : ""}
              {remainingSeconds}
            </p>
            <p className=" font-bold text-white text-2xl">Seconds</p>
          </div>
        </div>
        <button className="btn mt-10 mb-20  w-[100%] h-full pt-4 pb-4 text-center text-black  text-4xl bg-[#FADA5E] rounded-md shadow-md hover:text-[40px] hover:shadow-xl md:scale-100 scale-75 ">
          Sign Up for Free!
        </button>
      </div>
    </div>
  );
};

export default Timer;
