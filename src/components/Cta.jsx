import React from "react";

const Cta = () => {
  return (
    <div className="  pb-20 w-full flex justify-center items-center  bg-[#808080]">
      <div className="holder relative w-[80%] aspect-[16/9] bg-[#B2AC88] rounded-lg shadow-lg text-white flex flex-col justify-center items-center">
        <h1 className=" mt-[4%] text-center text-xl sm:text-2xl md:text-4xl lg:text-6xl ">
          Start Learning by choosing the plan that suits you best
        </h1>
        <p className=" text-center mt-[2%] text-md md:text-lg lg:text-xl mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          ipsa.
        </p>
        <div className="contain">
          <button className=" pl-5 pr-5 pt-2 pb-2 rounded-3xl  w-fit bg-black text-xl">
            Get Started
          </button>
        </div>
        <div className="contain hidden  lg:flex absolute justify-around items-end w-full h-full bottom-10">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl text-black -rotate-[20deg]">
            <div className="px-6 py-4">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Base
              </div>
              <div className="mt-4 flex items-baseline text-5xl leading-none font-extrabold text-gray-900">
                $99
                <span className="ml-1 text-xl font-medium text-gray-500">
                  /month
                </span>
              </div>
            </div>
            <div className="px-6 pb-8">
              <ul>
                <li className="flex items-center mt-4">
                  <svg
                    className="h-6 w-6 text-green-500 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Video access
                </li>
                <li className="flex items-center mt-4">
                  <svg
                    className="h-6 w-6 text-green-500 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  basic Analytics
                </li>
              </ul>
              <div className="mt-6">
                <button className="w-full px-6 py-2 text-white font-semibold bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">
                  Get started
                </button>
              </div>
            </div>
          </div>
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl text-black rotate-[20deg]">
            <div className="px-6 py-4">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                pro
              </div>
              <div className="mt-4 flex items-baseline text-5xl leading-none font-extrabold text-gray-900">
                $199
                <span className="ml-1 text-xl font-medium text-gray-500">
                  /month
                </span>
              </div>
            </div>
            <div className="px-6 pb-8">
              <ul>
                <li className="flex items-center mt-4">
                  <svg
                    className="h-6 w-6 text-green-500 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  video/stream access
                </li>
                <li className="flex items-center mt-4">
                  <svg
                    className="h-6 w-6 text-green-500 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Advanced Analytics
                </li>
              </ul>
              <div className="mt-6">
                <button className="w-full px-6 py-2 text-white font-semibold bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
