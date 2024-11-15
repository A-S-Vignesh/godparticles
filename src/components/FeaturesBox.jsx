import React from 'react'

function FeaturesBox({image,details,title}) {
  return (
    <div className="w-[350px] h-[200px] flex flex-col text-start bg-white rounded-lg p-4 m-4 shadow-xl hover:scale-105 transform transition duration-300 ease-in-out">
      <img src={image} alt="" />
      <h2 className="p-4 text-xl">{title}</h2>
      <button
        className="p-3 ml-5 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none self-start"
        aria-label="Arrow Button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}

export default FeaturesBox