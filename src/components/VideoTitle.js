import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[25%] md:pt-64 px-6 md:px-14 text-white absolute bg-gradient-to-r from-[rgb(0_0_0/.5)_30%]">
      <h1 className="text-2xl md:text-4xl font-bold ">{title}</h1>
      <p className="hidden md:inline-block pt-8 w-2/4 ">{overview}</p>
      <div>
        <button className="bg-white text-black my-2 md:my-0 py-1 md:py-2 px-4 md:px-10 rounded-md hover:opacity-80">
          Play
        </button>
        <button className="hidden md:inline-block bg-gray-600 my-8 ml-2 py-2 px-8 rounded-md opacity-70 hover:opacity-50">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
