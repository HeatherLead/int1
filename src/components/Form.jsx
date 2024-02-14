import React, { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
const Form = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);
  const handleClose = () => {
    setShowForm(false);
  };

  return (
    <div
      className={`fixed bottom-0 left-0 w-full md:w-1/3  bg-[#808080] transition-transform duration-500 transform ${
        showForm ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <button
        type="button"
        className="bg-[#B2AC88] text-white py-2 px-4 rounded-sm   absolute right-0"
        onClick={handleClose}
      >
        <CloseIcon />
      </button>
      <form className=" bg-[#808080] text-white p-6 rounded-sm shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
        <div className="mb-4">
          <label htmlFor="phone" className="block mb-1">
            Phone Number:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email Address:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-[#FADA5E] text-white py-2 px-4 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
