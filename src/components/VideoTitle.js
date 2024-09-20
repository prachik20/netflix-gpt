import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-48 px-14 text-white absolute bg-gradient-to-r from-[rgb(0_0_0/.5)_25%]">
      <h1 className="text-4xl font-bold ">{title}</h1>
      <p className="pt-8 w-2/4 ">{overview}</p>
      <div>
        <button className="bg-white text-black my-8 py-2 px-10 rounded-md hover:opacity-80">
          Play
        </button>
        <button className="bg-gray-600 my-8 ml-2 py-2 px-8 rounded-md opacity-70 hover:opacity-50">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
